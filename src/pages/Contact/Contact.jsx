import { Button, Card, Page } from "@shopify/polaris";
import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";
import React from "react";

import axios from "axios";

const TextInputLiveFeedback = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
    </div>
  );
};

const TextAreaLiveFeedback = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <textarea
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
    </div>
  );
};

function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      messeges: "",
    },
    onSubmit: async (values) => {
      
      axios
        .post(
          "https://testapi.io/api/anhez/contact-us",
          values,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(5, "Must be at least 5 characters.")
        .max(100, "Must be less  than 100 characters.")
        .required("Email is required.")
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please enter correct email format."
        ),
      subject: Yup.string()
        .min(1, "Must be at least 1 characters.")
        .max(50, "Must be less  than 50 characters.")
        .required("Subject is required."),
      messeges: Yup.string()
        .min(1, "Must be at least 1 characters.")
        .max(300, "Must be less  than 300 characters.")
        .required("Messeges is required."),
    }),
  });

  return (
    <Page title="Contact">
      <FormikProvider value={formik}>
        <Form>
          <Card>
            <Card.Section>
              <p>
                Don't hesitate to contact us if you face any problem or have any
                question about the app. We are happy to help you.
              </p>
              <p>
                Please give us permisstion to access your Shopify Admin. So we
                could support you quickly. We need to access{" "}
                <span className="contact-intro-bold">Apps</span> and{" "}
                <span className="contact-intro-bold">
                  Online Store &rarr; Themes.{" "}
                </span>
                Our email address for creating staff account is:{" "}
                <span className="contact-intro-bold">
                  contact@globosoftware.net
                </span>
              </p>
            </Card.Section>
            <Card.Section>
              <TextInputLiveFeedback
                type="text"
                label="Your email"
                id="email"
                name="email"
              />
              <TextInputLiveFeedback
                type="text"
                label="Subject"
                id="subject"
                name="subject"
              />
              <TextAreaLiveFeedback
                label="Messeges"
                id="messeges"
                name="messeges"
              />
            </Card.Section>
            <Card.Section>
              <Button submit primary>
                Send
              </Button>
            </Card.Section>
          </Card>
        </Form>
      </FormikProvider>
    </Page>
  );
}

export default Contact;
