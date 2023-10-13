import { Divider, Flex } from 'antd';
import Card from '../Card';
import ListItem from '../ListItem';
import QuestionForm from '../QuestionForm';
import ListItemActionButton from '../ApplicationForm/ListItemActionButton';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Profile, Question } from '../../interfaces/applicationForm';
import { useApplicationFormContext } from '../../context/applicationForm';
import { Fragment } from 'react';

const ProfileInformation = () => {
  const { profile, setProfile } = useApplicationFormContext();

  const handleInternalChange = (
    event: CheckboxChangeEvent,
    name: keyof Profile
  ) => {
    const informations = { ...profile };

    if (name !== 'profileQuestions') {
      informations[name].mandatory = event?.target?.checked;
    }

    setProfile(informations);
  };

  const handleHideShowChange = (checked: boolean, name: keyof Profile) => {
    const informations = { ...profile };

    if (name !== 'profileQuestions') {
      informations[name].show = checked;
    }

    setProfile(informations);
  };

  const handleSaveQuestion = (question: Question, questionIndex?: number) => {
    const profileQuestions = [...(profile.profileQuestions || [])];

    if (typeof questionIndex === 'number') {
      profileQuestions[questionIndex] = question;
    } else {
      profileQuestions.push(question);
    }

    setProfile({ ...profile, profileQuestions });
  };

  const handleDeleteQuestion = (questionIndex: number) => {
    const profileQuestions = [...(profile.profileQuestions || [])];

    profileQuestions.splice(questionIndex, 1);

    setProfile({ ...profile, profileQuestions });
  };

  return (
    <Card title='Profile'>
      <ListItem
        label='Education'
        actionButton={
          <ListItemActionButton
            internal={false}
            checked={profile?.education?.mandatory}
            show={profile?.education?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'education')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'education')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Experience'
        actionButton={
          <ListItemActionButton
            internal={false}
            checked={profile?.experience?.mandatory}
            show={profile?.experience?.show}
            onCheckboxChange={(event) =>
              handleInternalChange(event, 'experience')
            }
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'experience')
            }
          />
        }
      />
      <Divider />
      <ListItem
        label='Resume'
        actionButton={
          <ListItemActionButton
            internal={false}
            checked={profile?.resume?.mandatory}
            show={profile?.resume?.show}
            onCheckboxChange={(event) => handleInternalChange(event, 'resume')}
            onSwitchChange={(checked) =>
              handleHideShowChange(checked, 'resume')
            }
          />
        }
      />

      <Flex
        vertical
        gap='24px'
        style={{ marginTop: '24px' }}
      >
        {/* Show and can edit profile questions */}
        {profile?.profileQuestions?.map((question, questionIndex) => (
          <Fragment key={question?.id}>
            <Divider style={{ margin: 0 }} />

            <QuestionForm
              questionData={question}
              onSaveQuestion={(updatedQuestion) =>
                handleSaveQuestion(updatedQuestion, questionIndex)
              }
              onDeleteQuestion={() => handleDeleteQuestion(questionIndex)}
            />
          </Fragment>
        ))}

        {/* Add new profile question */}
        <QuestionForm onSaveQuestion={handleSaveQuestion} />
      </Flex>
    </Card>
  );
};

export default ProfileInformation;
