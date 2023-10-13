import { Divider, Flex } from 'antd';
import Card from '../Card';
import ListItemActionButton from '../ApplicationForm/ListItemActionButton';
import QuestionForm from '../QuestionForm';
import ListItem from '../ListItem';
import { useApplicationFormContext } from '../../context/applicationForm';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
  PersonalInformation as IPersonalInformation,
  Question,
} from '../../interfaces/applicationForm';
import { Fragment } from 'react';

const PersonalInformation = () => {
  const { personalInformation, setPersonalInformation } =
    useApplicationFormContext();

  const handleInternalChange = (
    event: CheckboxChangeEvent,
    name: keyof IPersonalInformation
  ) => {
    const informations = { ...personalInformation };

    if (name !== 'personalQuestions') {
      informations[name].internalUse = event?.target?.checked;
    }

    setPersonalInformation(informations);
  };

  const handleHideShowChange = (
    checked: boolean,
    name: keyof IPersonalInformation
  ) => {
    const informations = { ...personalInformation };

    if (name !== 'personalQuestions') {
      informations[name].show = checked;
    }

    setPersonalInformation(informations);
  };

  const handleSaveQuestion = (question: Question, questionIndex?: number) => {
    const personalQuestions = [
      ...(personalInformation.personalQuestions || []),
    ];

    if (typeof questionIndex === 'number') {
      personalQuestions[questionIndex] = question;
    } else {
      personalQuestions.push(question);
    }

    setPersonalInformation({ ...personalInformation, personalQuestions });
  };

  const handleDeleteQuestion = (questionIndex: number) => {
    const personalQuestions = [
      ...(personalInformation.personalQuestions || []),
    ];

    personalQuestions.splice(questionIndex, 1);

    setPersonalInformation({ ...personalInformation, personalQuestions });
  };

  return (
    <Card title='Personal Information'>
      <ListItem label='First Name' />
      <Divider />
      <ListItem label='Last Name' />
      <Divider />
      <ListItem label='Email' />
      <Divider />
      <ListItem
        label='Phone'
        caption='without dial code'
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.phoneNumber?.internalUse}
            show={personalInformation?.phoneNumber?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'phoneNumber')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'phoneNumber')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Nationality'
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.nationality?.internalUse}
            show={personalInformation?.nationality?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'nationality')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'nationality')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Current Residence '
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.currentResidence?.internalUse}
            show={personalInformation?.currentResidence?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'currentResidence')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'currentResidence')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='ID Number'
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.idNumber?.internalUse}
            show={personalInformation?.idNumber?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'idNumber')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'idNumber')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Date of Birth '
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.dateOfBirth?.internalUse}
            show={personalInformation?.dateOfBirth?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'dateOfBirth')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'dateOfBirth')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Gender'
        actionButton={
          <ListItemActionButton
            checked={personalInformation?.gender?.internalUse}
            show={personalInformation?.gender?.show}
            onCheckboxChange={(event) => handleInternalChange(event, 'gender')}
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'gender')
            }
          />
        }
      />

      <Flex
        vertical
        gap='24px'
        style={{ marginTop: '24px' }}
      >
        {/* Show and can edit personal questions */}
        {personalInformation?.personalQuestions?.map(
          (question, questionIndex) => (
            <Fragment key={question?.id}>
              <Divider style={{ margin: 0 }} />

              <QuestionForm
                key={question?.id}
                questionData={question}
                onSaveQuestion={(updatedQuestion) =>
                  handleSaveQuestion(updatedQuestion, questionIndex)
                }
                onDeleteQuestion={() => handleDeleteQuestion(questionIndex)}
              />
            </Fragment>
          )
        )}

        {/* Add new personal question */}
        <QuestionForm onSaveQuestion={handleSaveQuestion} />
      </Flex>
    </Card>
  );
};

export default PersonalInformation;
