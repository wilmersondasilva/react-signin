import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,
    Alert
} from 'reactstrap'
import http from '../../services/http'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAlertVisible: false,
            signInButtonText: 'Sign In',
            isSignInButtonDisabled: false
        }

        this.history = props.history
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }
    signIn = async event => {
        event.preventDefault()
        const { email, password } = this.state

        this.setState({
            signInButtonText: 'Signing in...',
            isSignInButtonDisabled: true,
            isAlertVisible: false
        })

        try {
            await http.signIn(email, password)
            this.history.push('/home')
        } catch (error) {
            this.setState({
                signInButtonText: 'Sign in',
                isSignInButtonDisabled: false,
                isAlertVisible: true
            })
        }
    }
    onDismiss = () => {
        this.setState({
            isAlertVisible: false
        })
    }
    render() {
        const {
            email,
            password,
            signInButtonText,
            isSignInButtonDisabled
        } = this.state
        return (
            <Container fluid>
                <Row className="pt-5">
                    <Col
                        xs={{ size: 10, offset: 1 }}
                        sm={{ size: 8, offset: 2 }}
                        md={{ size: 6, offset: 3 }}
                        lg={{ size: 4, offset: 4 }}
                    >
                        <Alert
                            color="danger"
                            className="w-100 position-relative"
                            isOpen={this.state.isAlertVisible}
                            toggle={this.onDismiss}
                        >
                            Incorrect username or password.
                        </Alert>
                        <Container className="my-5 py-5 px-4 border border-secondary rounded">
                            <h2 className="text-center mb-4">Mine</h2>
                            <Form className="form" onSubmit={this.signIn}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="password">
                                                Password
                                            </Label>
                                        </Col>
                                        <Col className="text-right">
                                            <Link to="/password-recovery">
                                                <Button
                                                    color="link"
                                                    className="p-0"
                                                >
                                                    Forgot password?
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <Button
                                    className="w-100"
                                    disabled={isSignInButtonDisabled}
                                >
                                    {signInButtonText}
                                </Button>
                            </Form>
                        </Container>
                        <Container className="mt-5 py-3 text-center border border-secondary rounded">
                            New to Mine?
                            <Link to="/signup">
                                <Button
                                    color="link"
                                    className="py-0 px-1 border-0"
                                >
                                    Create an account
                                </Button>
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Login)
