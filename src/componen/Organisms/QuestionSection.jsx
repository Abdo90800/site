import { Container } from "@mui/material";
import QuestionCard from "../Molecules/QuestionCard";
import QuestionComponent from "../Molecules/QuestionComponent";
import QuestionTitle from "../Molecules/QuestionTitle";
import Text from "../Atoms/Text";

const QuestionSection = () => {
  return (
    <section className="question-section grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center md:justify-items-stretch p-6 lg:px-16 text-center lg:text-left">
      {/* First Section */}
      <Container className="w-full max-w-xl">
        <div className="card-section w-full">
          <QuestionTitle />
          <QuestionCard />
        </div>
      </Container>

      {/* Second Section */}
      <div className="question w-full max-w-xl p-4">
        <Text text={<QuestionComponent />}></Text>
      </div>
    </section>
  );
};

export default QuestionSection;
