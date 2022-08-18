import React from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import TextHighlight from "./TextHighlight";

const OtherStuff = () => {
  return (
    <section className="mt-12" id="other-stuff">
      <div>
        <SectionHeader title="Projects" />
        <p className="text-faded leading-relaxed text-sm">
          The following is a list of the <TextHighlight>personal</TextHighlight>{" "}
          projects and products that I have worked on or to which I have{" "}
          <TextHighlight>contributed</TextHighlight> in some other capacity.
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mt-6">
          <ProjectCard
            name="vetaCloud"
            description="A cloud infrastructure that simplifies file uploads - coming soon"
            github="https://www.vetaCloud.com"
            website="https://www.vetaCloud.com"
          />
          <ProjectCard
            name="Frinna"
            description="Send messages and reply anonymously without an account"
            github="https://frinna.herokuapp.com"
            website="https://frinna.herokuapp.com"
          />
          <ProjectCard
            name="Thrift-contribution"
            description="Monthly thrift contribution API I built within 24 hours"
            github="https://github.com/adesiyanoladipo/Thrift-contribution"
            website="https://github.com/adesiyanoladipo/Thrift-contribution"
          />
          <ProjectCard
            name="Online Store"
            description="An online store"
            github="https://github.com/adesiyanoladipo/Ecommerce-website"
            website="https://github.com/adesiyanoladipo/Ecommerce-website"
          />
          <ProjectCard
            name="Ranode"
            description="Transfer money"
            github="https://github.com/adesiyanoladipo/Ranode"
            website="https://github.com/adesiyanoladipo/Ranode"
          />
        </section>
      </div>
    </section>
  );
};

export default OtherStuff;
