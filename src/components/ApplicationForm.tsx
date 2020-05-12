import React, { ReactElement } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

interface Props {}

export default function ApplicationInput({}: Props): ReactElement {
  return (
    <Formik
      initialValues={{
        company: "",
        position: "",
        location: "",
        method: "",
        date: "",
        coverLetter: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit", data);
        setSubmitting(false);
      }}
    >
      <Form id="application-form">
        <i className="tim-icons tim-icons-lg icon-planet teal" />
        <Field placeholder="Company" name="company" type="input" />
        <i className="tim-icons tim-icons-lg icon-badge teal" />
        <Field placeholder="Position" name="postion" type="input" />
        <i className="tim-icons tim-icons-lg icon-square-pin teal" />
        <Field placeholder="Location" name="location" type="input" />
        <i className="tim-icons tim-icons-lg icon-send teal" />
        <Field placeholder="Method" name="method" type="input" />
        <i className="tim-icons tim-icons-lg icon-watch-time teal" />
        <Field placeholder="Date" name="date" type="date" />
        <i className="tim-icons tim-icons-lg icon-pencil teal" />
        <Field placeholder="Cover Letter" name="coverLetter" type="input" />
        <Link className="btn-main btn" type="submit" to="#">
          <span>Submit</span>
        </Link>
      </Form>
    </Formik>
  );
}
