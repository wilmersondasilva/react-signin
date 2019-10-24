import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
} from 'reactstrap'
import { REQUEST_DELAY } from '../../services/http'

const REGULAR_SUBMIT_BUTTON_TEXT = 'Sign Up'
const LOADING_SUBMIT_BUTTON_TEXT = 'Sending...'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            isEmailEmpty: undefined,
            isPasswordEmpty: undefined
        }

        this.history = props.history
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }
    validate = () => {
        debugger;
        const { email, password } = this.state
        const errors = []

        this.setState({
            isEmailEmpty: undefined,
            isPasswordEmpty: undefined,
        })

        if (!email)
            errors.push({ isEmailEmpty: true })

        if (!password)
            errors.push({ isPasswordEmpty: true })

        const errorsObject = errors.reduce((errorsObject, error) => {
            return Object.assign({}, errorsObject, error)
        }, {})

        this.setState(errorsObject)
    
        return !errors.length
    }
    signUp = event => {
        debugger;
        event.preventDefault()
        const isValid = this.validate()

        if (isValid) {
            this.setState({
                isEmailEmpty: '',
                isPasswordEmpty: '',
                isLoading: true
            })

            setTimeout(() => {
                this.history.push('/home')
            }, REQUEST_DELAY)
        }
    }
    render() {
        const {
            email,
            password,
            firstName,
            lastName,
            isEmailEmpty,
            isPasswordEmpty,
            isLoading,
        } = this.state

        return (
            <Container className="mt-5" fluid>
                <Row>
                    <Col
                        sm={{ size: 8, offset: 2 }}
                        md={{ size: 6, offset: 3 }}
                        lg={{ size: 4, offset: 4 }}
                    >
                        <Container className="mt-md-5 mb-5 py-5 px-4 border border-secondary rounded">
                            <h2 className="text-center mb-4">Mine</h2>
                            <Form className="form" onSubmit={this.signUp}>
                                <FormGroup>
                                    <Label for="firstName">First name</Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last name</Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        valid={isEmailEmpty === false}
                                        invalid={isEmailEmpty === true}
                                        onBlur={this.validate}
                                        onChange={this.handleChange}
                                    />
                                    <FormFeedback valid></FormFeedback>
                                    <FormFeedback>
                                        This field is required
                                    </FormFeedback>
                                    <FormText>Required field</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        valid={isPasswordEmpty === false}
                                        invalid={isPasswordEmpty === true}
                                        onBlur={this.validate}
                                        onChange={this.handleChange}
                                    />
                                    <FormFeedback valid></FormFeedback>
                                    <FormFeedback>
                                        This field is required
                                    </FormFeedback>
                                    <FormText>Required field</FormText>
                                </FormGroup>
                                <Button
                                    className="w-100"
                                    disabled={isLoading}
                                >
                                    {isLoading ? LOADING_SUBMIT_BUTTON_TEXT : REGULAR_SUBMIT_BUTTON_TEXT}
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Login)
