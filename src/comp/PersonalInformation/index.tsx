import { Divider } from 'antd';
import Card from '../Card';
import ListItemActionButton from '../ApplicationForm/ListItemActionButton';
import QuestionForm from '../QuestionForm';
import ListItem from '../ListItem';

interface PersonalInformationProps {}

const PersonalInformation: React.FC<PersonalInformationProps> = () => {
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
        actionButton={<ListItemActionButton />}
      />
      <Divider />
      <ListItem
        label='Nationality'
        actionButton={<ListItemActionButton />}
      />
      <Divider />
      <ListItem
        label='Current Residence '
        actionButton={<ListItemActionButton />}
      />
      <Divider />
      <ListItem
        label='ID Number'
        actionButton={<ListItemActionButton />}
      />
      <Divider />
      <ListItem
        label='Date of Birth '
        actionButton={<ListItemActionButton />}
      />
      <Divider />
      <ListItem
        label='Gender'
        actionButton={<ListItemActionButton />}
      />

      <QuestionForm />
    </Card>
  );
};

export default PersonalInformation;
