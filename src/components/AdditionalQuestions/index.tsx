import Card from '../Card';
import QuestionForm from '../QuestionForm';
import { Question } from '../../interfaces/applicationForm';
import { useApplicationFormContext } from '../../context/applicationForm';
import { Divider, Flex } from 'antd';
import { Fragment } from 'react';

const AdditionalQuestions = () => {
  const { customisedQuestions, setCustomisedQuestions } =
    useApplicationFormContext();

  const handleSaveQuestion = (question: Question, questionIndex?: number) => {
    const additionalQuestions = [...(customisedQuestions || [])];

    if (typeof questionIndex === 'number') {
      additionalQuestions[questionIndex] = question;
    } else {
      additionalQuestions.push(question);
    }

    setCustomisedQuestions(additionalQuestions);
  };

  const handleDeleteQuestion = (questionIndex: number) => {
    const additionalQuestions = [...(customisedQuestions || [])];

    additionalQuestions.splice(questionIndex, 1);

    setCustomisedQuestions(additionalQuestions);
  };

  return (
    <Card title='Additional questions'>
      <Flex
        vertical
        gap='24px'
      >
        {/* Show and can edit additional questions */}
        {customisedQuestions?.map((question, questionIndex, allQuestions) => (
          <Fragment key={question?.id}>
            <QuestionForm
              key={question?.id}
              questionData={question}
              onSaveQuestion={(updatedQuestion) =>
                handleSaveQuestion(updatedQuestion, questionIndex)
              }
              onDeleteQuestion={() => handleDeleteQuestion(questionIndex)}
            />

            {questionIndex !== allQuestions.length - 1 && (
              <Divider style={{ margin: 0 }} />
            )}
          </Fragment>
        ))}

        {/* Add new additional question */}
        <QuestionForm onSaveQuestion={handleSaveQuestion} />
      </Flex>
    </Card>
  );
};

export default AdditionalQuestions;
