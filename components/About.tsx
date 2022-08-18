import React from "react";
import SectionHeader from "./SectionHeader";
import TextHighlight from "./TextHighlight";

const About = () => (
  <section className="mt-12" id="about">
    <div>
      <SectionHeader title="About" />
      <p className="text-faded leading-relaxed text-sm">
        I&apos;m <TextHighlight>Oladipo</TextHighlight> - &quot;Duke of
        tech&quot;, I prefer the AKA, lol. I&apos;m a software engineer, with
        over <TextHighlight>3 years</TextHighlight> of experience in Googling
        and build &quot;stuff&quot; ranging from tools, to web apps and alot
        more. If I&apos;m not hitting the keyboard like it&apos;s responsible
        for my sadness, I&apos;ll definitely be on Netflix or YouTube, I&apos;m
        very productive, I know. I live in the intersection of Backend and
        DevOps engineering, they&apos;re both fun, so. Not really the most
        hardworking boy y&apos;ll see, I guess I just enjoy what I do,
        that&apos;s all. I try to <TextHighlight>explore</TextHighlight> new
        technologies and get better regardless of how good I think I may be + I
        enjoy building and contributing to tech communities. Not a lone wolf but
        keeping conversations stresses me &quot;ALOT&quot; - Just call me,
        human! Don&apos;t mention DC beside me unless y&apos;re a recruiter 🙃 -
        I&apos;m a marvel freak who stays at the cinema till everyone is gone
        just to watch the marvel movie to the last second. I&apos;m writing this
        09:05 PM, so, I&apos;m !sorry if this doesn&apos;t make sense to you!
      </p>
    </div>
  </section>
);

export default About;
