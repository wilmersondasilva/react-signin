import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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

const REGULAR_SUBMIT_BUTTON_TEXT = 'Send password reset email'
const LOADING_SUBMIT_BUTTON_TEXT = 'Sending...'

class PasswordReset extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailLabelText:
                'Enter your email address and we will send you a link to reset your password',
            isAlertVisible: false,
            shouldShowSubmitButton: true,
            shouldShowEmailInput: true,
            isLoading: false
        }

        this.history = props.history
    }
    handleChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value
        })
    }
    goBack = () => {
        this.history.goBack()
    }
    submit = async event => {
        event.preventDefault()
        const { email } = this.state

        this.setState({
            isAlertVisible: false,
            isLoading: true
        })

        try {
            await http.resetPassword(email)
            this.setState({
                emailLabelText:
                    'Check your email for a link to reset your password',
                shouldShowSubmitButton: false,
                shouldShowEmailInput: false
            })
        } catch (error) {
            this.setState({
                isAlertVisible: true
            })
        } finally {
            this.setState({
                isLoading: false
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
            emailLabelText,
            shouldShowSubmitButton,
            shouldShowEmailInput,
            isLoading
        } = this.state
        return (
            <Container fluid>
                <h3 className="text-center mt-4">Reset your password</h3>
                <Row className="pt-1">
                    <Col
                        xs={{ size: 10, offset: 1 }}
                        sm={{ size: 8, offset: 2 }}
                        md={{ size: 6, offset: 3 }}
                        lg={{ size: 4, offset: 4 }}
                    >
                        <Container className="my-5 py-5 px-4 border border-secondary rounded">
                            <Form className="form" onSubmit={this.submit}>
                                <FormGroup>
                                    <Label for="email">{emailLabelText}</Label>
                                    {shouldShowEmailInput && (
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                    )}
                                </FormGroup>
                                {shouldShowSubmitButton ? (
                                    <Button disabled={isLoading} className="w-100">
                                        {isLoading ? LOADING_SUBMIT_BUTTON_TEXT : REGULAR_SUBMIT_BUTTON_TEXT}
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        className="w-100"
                                        onClick={this.goBack}
                                    >
                                        Return to sign in
                                    </Button>
                                )}
                            </Form>
                        </Container>
                        <Alert
                            color="danger"
                            className="w-100 position-relative"
                            isOpen={this.state.isAlertVisible}
                            toggle={this.onDismiss}
                        >
                            The especified email address was not found
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(PasswordReset)
