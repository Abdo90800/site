import React from "react";
import Border from "../Atoms/Border";
import Question from "../Atoms/Question";

const QuestionComponent = () => {
  return (
    <div className="container">
      <header className="flex justify-between items-center pr-4 pl-2">
        <h1 className="text-[#121212] text-lg lg:text-xl font-semibold">
          How easy is it to set up  Epoque?
        </h1>
        <button className="text-3xl lg:text-5xl">-</button>
      </header>
      <p className="pr-4 pl-2 mt-3 text-sm lg:text-lg font-normal leading-6 text-[#494949]">
        Setting up  Epoque   is as easy as pie - and you don't even have to bake
        anything. Our intuitive onboarding process will guide you step by step.
        You'll be up and running before you know it
      </p>
      <Border />
      <div className="questions mt-6">
        <aside>
          <Question Answer="first-answer">
            Can I integrate  Epoque   with other platforms?
          </Question>
          <Border />
        </aside>
        <aside>
          <Question Answer="second-answer">
            What kind of support do you offer?
          </Question>
          <Border />
        </aside>
        <aside>
          <Question Answer="third-answer">
            How secure is my data with Epoque?
          </Question>
          <Border />
        </aside>
        <aside>
          <Question Answer="fourth-answer">
            Can Elemental adapt as my business grows?
          </Question>
          <Border />
        </aside>
      </div>
    </div>
  );
};

export default QuestionComponent;
