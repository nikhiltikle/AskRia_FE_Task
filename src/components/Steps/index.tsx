import React, { useState } from "react";
import { Steps } from "antd";

const Steps2: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: "Program Details",
          },
          {
            title: "Application Form",
          },
          {
            title: "Workflow",
          },
          {
            title: "Preview",
          },
        ]}
      />
    </>
  );
};

export default Steps2;
