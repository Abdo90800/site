import Text from "../Atoms/Text"

const QuestionTitle = () => {
  return (
    <Text
    style={{ width: "100%", padding: "5px", marginBottom: "30px" }}
    text={
      <div>
        <p className="text-sm text-[#494949]">FAQs</p>
        <h1 className="text-2xl lg:text-4xl font-medium text-[#121212] leading-snug">
          Inquiries? We've got solutions for you
        </h1>
      </div>
    }
  />
  )
}

export default QuestionTitle
