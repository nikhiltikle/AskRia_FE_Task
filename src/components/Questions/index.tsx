const Questions = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='questions-container'>
      <div className='questions-label-container'>{label}</div>
      <div className='questions-label-children-style'>{children}</div>
    </div>
  );
};

export default Questions;
