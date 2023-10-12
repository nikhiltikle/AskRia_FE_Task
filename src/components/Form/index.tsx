import { useFormik } from "formik";
import Questions from "../Questions";
import { Button, Checkbox, Modal, Switch } from "antd";
import { useState } from "react";
import AddQuestion from "./AddQuestion";

const initialValue = {
  coverImage: "",
  personalInformation: {
    firstName: { internalUse: false, show: true },
    lastName: { internalUse: false, show: true },
    emailId: { internalUse: false, show: true },
    phoneNumber: { internalUse: false, show: true },
    nationality: { internalUse: false, show: true },
    currentResidence: { internalUse: false, show: true },
    idNumber: { internalUse: false, show: true },
    dateOfBirth: { internalUse: false, show: true },
    gender: { internalUse: false, show: true },
  },
  profile: {
    education: { internalUse: false, show: true },
    experience: { internalUse: false, show: true },
    resume: { internalUse: false, show: true },
  },
};

export const Form = () => {
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => console.log(values),
  });

  const [addQuestion, setAddQuestion] = useState(false);

  const handleClose = () => {
    setAddQuestion(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Questions label={"Upload cover image"}>
        <input
          id="coverImage"
          name="coverImage"
          type="file"
          onChange={handleChange}
          value={values.coverImage}
        />
      </Questions>
      <Questions label={"Personal Information"}>
        {["First Name", "Last Name", "Email"].map((label) => (
          <div>
            <label>{label}</label>
          </div>
        ))}
        {[
          ["Phone", "phoneNumber"],
          ["Nationality", "nationality"],
          ["Current Residence", "currentResidence"],
          ["ID Number", "idNumber"],
          ["Date of Birth", "dateOfBirth"],
          ["Gender", "gender"],
        ].map(([label, key]) => (
          <div>
            <label>{label}</label>
            <Checkbox
              id={`personalInformation.${key}.internalUse`}
              name={`personalInformation.${key}.internalUse`}
              onChange={handleChange}
              checked={
                values.personalInformation[
                  key as keyof typeof values.personalInformation
                ].internalUse
              }
            />
            <Switch
              id={`personalInformation.${key}.show`}
              title={`personalInformation.${key}.show`}
              onChange={(value) =>
                setFieldValue(`personalInformation.${key}.show`, value)
              }
              checked={
                values.personalInformation[
                  key as keyof typeof values.personalInformation
                ].show
              }
            />
          </div>
        ))}
      </Questions>
      <Questions label={"Profile"}>
        {[
          ["Education", "education"],
          ["Experience", "experience"],
          ["Resume", "resume"],
        ].map(([label, key]) => (
          <div>
            <label>{label}</label>
            <Checkbox
              id={`profile.${key}.internalUse`}
              name={`profile.${key}.internalUse`}
              onChange={handleChange}
              checked={
                values.profile[key as keyof typeof values.profile].internalUse
              }
            />
            <Switch
              id={`profile.${key}.show`}
              title={`profile.${key}.show`}
              onChange={handleChange}
              checked={values.profile[key as keyof typeof values.profile].show}
            />
          </div>
        ))}
        <Button htmlType="button" onClick={() => setAddQuestion(true)}>
          Add a question
        </Button>
        <AddQuestion isOpen={addQuestion} close={handleClose} />
      </Questions>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Form;
