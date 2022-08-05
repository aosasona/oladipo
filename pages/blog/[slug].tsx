import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as timeago from "timeago.js";
import parse from "html-react-parser";
import { gql } from "graphql-request";
import graphcms from "@utils/request.util";
import Layout from "@defaults/Layout";

import Back from "@components/Back";
import { IArticle, IRecommendation } from "interfaces/article.interface";
import ArticleMeta from "@components/ArticleMeta";

interface Props {
  article: IArticle;
  recommendation: IRecommendation;
}

const ArticlePage: NextPage<Props> = ({ article, recommendation }) => {
  return (
    <Layout
      title={article?.title}
      description={article?.description}
      showFooter={true}
    >
      <main className="mt-[13vh] lg:mt-[15vh] w-[95vw] lg:w-5/6 mx-auto px-3 max-w-[100vw]">
        <div className="flex flex-col gap-5">
          <Back />
          <ArticleMeta article={article} />
          <h1 className="text-4xl lg:text-5xl font-bold">{article?.title}</h1>
        </div>

        <section className="text-[13px] text-primary text-opacity-60 font-thin leading-relaxed mt-6">
          {parse(article?.content?.html as string)}
        </section>
      </main>
    </Layout>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    {
      articles {
        slug
      }
    }
  `;
  const response = await graphcms.request(query);
  const paths = response.articles.map((article: any) => {
    const slug = article?.slug;
    return {
      params: { slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx?.params as IParams;
  const query = gql`
    {
      article(where: {slug: "${slug}"}) {
          title
          description
          slug
          content {
            html
            text
          }
          createdAt
      }
    }`;

  const response = await graphcms.request(query);

  // GET RECOMMENDATION
  const recommendationQuery = gql`
      {
        articles(where: { slug_not: "${slug}" }, orderBy: createdAt_DESC, first: 1) {
          title
          description
          slug
          content {
            text
          }
          createdAt
        }
      }
    `;
  const recommendationResponse = await graphcms.request(recommendationQuery);
  const recommendation = recommendationResponse.articles;

  return {
    props: {
      article: response?.article || null,
      recommendation: recommendation,
    },
    revalidate: 10,
  };
};

export default ArticlePage;