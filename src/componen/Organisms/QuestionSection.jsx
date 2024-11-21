import Container from '@mui/material/Container';
import QuestionCard from "../Molecules/QuestionCard";
import QuestionComponent from "../Molecules/QuestionComponent";
import QuestionTitle from "../Molecules/QuestionTitle";
import Text from "../Atoms/Text";

const QuestionSection = () => {
  return (
    <section id='faqs' className="grid items-start grid-cols-1 gap-8 p-6 text-center question-section md:grid-cols-2 justify-items-center md:justify-items-stretch lg:px-16 lg:text-left">
      {/* First Section */}
      <Container className="w-full max-w-xl">
        <div className="w-full card-section">
          <QuestionTitle />
          <QuestionCard />
        </div>
      </Container>

      {/* Second Section */}
      <div className="w-full max-w-xl p-4 question">
        <Text text={<QuestionComponent />}></Text>
      </div>
    </section>
  );
};

export default QuestionSection;
