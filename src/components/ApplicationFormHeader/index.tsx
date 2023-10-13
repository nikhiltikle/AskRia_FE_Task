import './index.css';
import { Steps } from 'antd';

const StepperContent = ({ title }: { title: string }) => {
  return (
    <div
      className={
        title === 'Application Form'
          ? 'appliaction-form-items selected triangle-right'
          : 'appliaction-form-items'
      }
    >
      {title}
    </div>
  );
};

const ApplicationFormHeaderItems = [
  {
    title: <StepperContent title={'Program Details'} />,
    disabled: true,
    icon: <></>,
  },
  {
    title: <StepperContent title={'Application Form'} />,
    icon: <></>,
  },
  {
    title: <StepperContent title={'Workflow'} />,
    icon: <></>,
    disabled: true,
  },
  {
    title: <StepperContent title={'Preview'} />,
    icon: <></>,
    disabled: true,
  },
];

const ApplicationFormHeader = () => {
  return <Steps items={ApplicationFormHeaderItems} />;
};

export default ApplicationFormHeader;
