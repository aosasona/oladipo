import React from "react";
import SectionHeader from "./SectionHeader";
import SkillsRating from "./SkillsRating";
import TextHighlight from "./TextHighlight";

const Skills = () => {
  return (
    <section className="mt-12" id="skills">
      <div>
        <SectionHeader title="Skills" />
        <p className="text-faded leading-relaxed text-sm">
          In the past few years, I have had the opportunity to work with a wide
          variety of languages frameworks, databases etc (not as many as some
          other people, I am aware; however, I do prefer to become{" "}
          <TextHighlight>reasonably proficient</TextHighlight> in a particular
          language or framework before moving on to another); however, the
          following is a list of <TextHighlight>some</TextHighlight> of the
          technologies that I have worked with in the past as well as those that
          I am currently working with.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 my-5">
          <SkillsRating name="Python" level={6} />
          <SkillsRating name="JavaScript" level={6} />
          <SkillsRating name="Node.js & Express.js" level={6} />
          <SkillsRating name="Flask & FastAPI" level={6} />
          <SkillsRating name="GraphQL" level={6} />
          <SkillsRating name="AWS" level={6} />
          <SkillsRating name="CircleCI" level={6} />
          <SkillsRating name="Git & Github" level={6} />
          <SkillsRating name="Django and DRF" level={6} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
