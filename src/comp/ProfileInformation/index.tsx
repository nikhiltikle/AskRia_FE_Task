import { Divider } from 'antd';
import Card from '../Card';
import ListItem from '../ListItem';
import QuestionForm from '../QuestionForm';
import ListItemActionButton from '../ApplicationForm/ListItemActionButton';

interface ProfileInformationProps {}

const ProfileInformation: React.FC<ProfileInformationProps> = () => {
  return (
    <Card title='Profile'>
      <ListItem
        label='Education'
        actionButton={<ListItemActionButton internal={false} />}
      />
      <Divider />
      <ListItem
        label='Experience'
        actionButton={<ListItemActionButton internal={false} />}
      />
      <Divider />
      <ListItem
        label='Resume'
        actionButton={<ListItemActionButton internal={false} />}
      />

      <QuestionForm />
    </Card>
  );
};

export default ProfileInformation;
