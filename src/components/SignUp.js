import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isEmailInvalid: "",
      isPasswordInvalid: "",
      signUpButtonText: "Sign up",
      isSignUpButtonDisabled: false
    };

    this.history = props.history;
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  signUp = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({
      isEmailInvalid: "",
      isPasswordInvalid: ""
    });

    if (!email) {
      this.setState({
        isEmailInvalid: "invalid"
      });
    }

    if (!password) {
      this.setState({
        isPasswordInvalid: "invalid"
      });
    }

    if (email && password) {
      this.setState({
        isEmailInvalid: "",
        isPasswordInvalid: "",
        signUpButtonText: "Signing up...",
        isSignUpButtonDisabled: true
      });

      setTimeout(() => {
        this.history.push("/home");
      }, 1500);
    }
  };
  render() {
    const {
      email,
      password,
      firstName,
      lastName,
      isEmailInvalid,
      isPasswordInvalid,
      signUpButtonText,
      isSignUpButtonDisabled
    } = this.state;

    return (
      <Container className="mt-5" fluid>
        <Row>
          <Col
            xs={{ size: 10, offset: 1 }}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 6, offset: 3 }}
            lg={{ size: 4, offset: 4 }}
          >
            <Container className="mt-5 py-5 px-4 border border-secondary rounded">
              <h2 className="text-center mb-4">Mine</h2>
              <Form className="form" onSubmit={this.signUp}>
                <FormGroup>
                  <Label for="firstName">First name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    valid={isEmailInvalid !== ""}
                    invalid={isEmailInvalid === "invalid"}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                  <FormFeedback valid></FormFeedback>
                  <FormFeedback>Please this field is required</FormFeedback>
                  <FormText>Required field</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    valid={isPasswordInvalid !== ""}
                    invalid={isPasswordInvalid === "invalid"}
                    onChange={e => this.handleChange(e)}
                  />
                  <FormFeedback valid></FormFeedback>
                  <FormFeedback>Please this field is required</FormFeedback>
                  <FormText>Required field</FormText>
                </FormGroup>
                <Button className="w-100" disabled={isSignUpButtonDisabled}>
                  {signUpButtonText}
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Login);
