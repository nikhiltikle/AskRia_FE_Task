import { Button, Input, Modal, Select } from "antd";
import { useFormik } from "formik";
import Questions from "../Questions";

const AddQuestion = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { type: "", question: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <Modal open={isOpen} onCancel={close}>
      <form onSubmit={handleSubmit}>
        <Questions label="Questions">
          <div>
            <label>Type</label>
            <Select
              id="type"
              title="type"
              value={values.type}
              onChange={(e) => {
                console.log(e, values);
                handleChange(e);
              }}
              options={[
                { value: "a", label: "Paragraph" },
                { value: "mcq", label: "Multiple Choice" },
                { value: "c", label: "Dropdown" },
                { value: "d", label: "Yes or No" },
              ]}
            ></Select>
          </div>
          <div>
            <label>Question</label>
            <Input.TextArea
              id="question"
              value={values.question}
              onChange={handleChange}
            ></Input.TextArea>
          </div>
          <div hidden={values.type !== "mcq"}>
            <label>MCQ</label>
          </div>
        </Questions>
        <Button htmlType="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default AddQuestion;
