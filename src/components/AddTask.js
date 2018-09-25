import React from "react";
import { Form, Field } from "react-final-form";
import styled from "react-emotion";
import axios from "axios";
import Imagenation from "imagenation";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  const url = "https://nodeserverapis.herokuapp.com/api/register";
  const data = JSON.stringify(values, 0, 2);
  console.log(data);

  // axios
  //   .post(url, {
  //     topic: "register",
  //     body: data
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
};

const required = value => (value ? undefined : "Required");

const handleImage = imageData => {
  console.log(imageData);
};

const AddTask = () => (
  <FormDiv>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, validating, values }) => (
        <form onSubmit={handleSubmit}>
          {validating}

          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input {...input} type="text" placeholder="Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="text" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="text" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Task Text</label>
                <input {...input} type="text" placeholder="Task text" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Imagenation
            name="image"
            scaleSize="320"
            onImage={this.handleImage}
          />
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
      )}
    />
  </FormDiv>
);

export default AddTask;

const FormDiv = styled("div")`
  display: flex;

  width: 100%;
  & > form {
    flex-basis: 100%;
    display: inherit;
    flex-direction: row;
  }
`;
