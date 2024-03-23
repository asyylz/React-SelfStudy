import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"

export default function Question(questionText, answers,onSelectedAnswer,selectedAnswer,answerState) {
    return (
        <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{questionText}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={answers}
          answerState={answerState}
          selectedAnswer={selectedAnswer}
          onSelect={onSelectedAnswer}
        />
      </div>
    )
}