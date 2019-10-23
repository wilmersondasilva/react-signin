import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
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
      lastName: ""
    };
  }
  handleChange() {}
  render() {
    return (
      <Container className="mt-5" fluid>
        <Row>
          <Col
            xs={{ size: 10, offset: 1 }}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 6, offset: 3 }}
            lg={{ size: 4, offset: 4 }}
          >
            <Container className="my-5 py-5 px-4 border border-secondary rounded">
              <h2 className="text-center mb-4">Mine</h2>
              <Form className="form" onSubmit={e => this.submitForm(e)}>
                <FormGroup>
                  <Label for="firstName">First name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    value={this.state.firstName}
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
                    value={this.state.lastName}
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
                    value={this.state.email}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </FormGroup>
                <Button className="w-100">Sign Up</Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
