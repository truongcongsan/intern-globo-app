import React, { useCallback, useState } from "react";
import {
  Button,
  Form,
  FormLayout,
  Page,
  Card,
  Spinner,
  TextContainer,
  TextField,
  TextStyle,
} from "@shopify/polaris";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

let SignupSchema = Yup.object().shape({
  subject: Yup.string()
    .min(5, "Must be at least 5 characters.")
    .max(50, "Must be less  than 50 characters.")
    .required("Subject is required."),
  messege: Yup.string()
    .min(5, "Must be at least 5 characters.")
    .max(300, "Must be less  than 300 characters.")
    .required("Messege is required."),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Contact() {
  const [msgAlert, setMsgAlert] = useState("");
  const [isMsgAlert, setIsMsgAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      messege: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      axios
        .post("https://testapi.io/api/anhez/contact-us", values, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setMsgAlert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        setIsLoading(false);
        setIsMsgAlert(true);
      }, 1000);
    },
  });
  const handleChange = (value, id) => {
    formik.setFieldValue(id, value);
  };
  const { values, errors, touched } = formik;

  return (
    <div style={{ marginBottom: "30px" }}>
      <Page title="Contact">
        <Form onSubmit={formik.handleSubmit}>
          <FormLayout>
            <Card>
              <Card.Section>
                {isMsgAlert && (
                  <TextContainer>
                    <TextStyle variation="strong">
                      <TextStyle variation="positive">{msgAlert}</TextStyle>
                    </TextStyle>
                  </TextContainer>
                )}
                {!isMsgAlert && (
                  <TextContainer>
                    <p>
                      Don't hesitate to contact us if you face any problem or
                      have any question about the app. We are happy to help you.
                    </p>
                    <p>
                      Please give us permisstion to access your Shopify Admin.
                      So we could support you quickly. We need to access{" "}
                      <TextStyle variation="strong">Apps</TextStyle> and{" "}
                      <TextStyle variation="strong">
                        Online Store &rarr; Themes.{" "}
                      </TextStyle>
                      Our email address for creating staff account is:{" "}
                      <TextStyle variation="strong">
                        contact@globosoftware.net
                      </TextStyle>
                    </p>
                  </TextContainer>
                )}
              </Card.Section>
              <Card.Section>
                <TextField
                  value={values.email}
                  onChange={handleChange}
                  label="Your email"
                  type="email"
                  autoComplete="email"
                  id="email"
                  error={touched.email && errors.email}
                />
                <TextField
                  value={values.subject}
                  onChange={handleChange}
                  label="Your subject"
                  type="text"
                  id="subject"
                  error={touched.subject && errors.subject}
                />
                <TextField
                  value={values.messege}
                  onChange={handleChange}
                  label="Your messege"
                  type="text"
                  id="messege"
                  error={touched.messege && errors.messege}
                  multiline={4}
                />
              </Card.Section>
              <Card.Section>
                <Button submit disabled={isLoading} primary>
                  {isLoading && (
                    <div className="btn-loading">
                      <Spinner
                        accessibilityLabel="Small spinner example"
                        size="small"
                      />
                    </div>
                  )}
                  {!isLoading && <div className="btn-loading">Submit</div>}
                </Button>
              </Card.Section>
            </Card>
          </FormLayout>
        </Form>
      </Page>
    </div>
  );
}
