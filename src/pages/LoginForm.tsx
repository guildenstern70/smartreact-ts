/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AnimatedLogo from '../components/AnimatedLogo';

interface LoginState {
    username: string;
    password: string;
}

interface LoginProps {
    history: string[];
}

export default class LoginForm extends React.Component<LoginProps, LoginState> {
    TITLE = 'Login';

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({ username: event.currentTarget.value });
    }

    onChangePassword(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({ password: event.currentTarget.value });
    }

    onSubmit(): void {
        console.log('You are logged in > ' + this.state.username);
        this.props.history.push('/home');
    }

    componentDidMount(): void {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    render(): React.ReactNode {
        return (
            <div className="login-form">
                {/*
                  Heads up! The styles below are necessary for the correct render of this example.
                  You can do same with CSS, the main idea is that all the elements up to the `Grid`
                  below must have a height of 100%.
                */}
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
                <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="blue" textAlign="center">
                            <AnimatedLogo size="medium" /> Log-in to your account
                        </Header>
                        <Form size="large">
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="E-mail address"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                                <Button color="blue" fluid size="large" onClick={this.onSubmit}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Link to="/home">Sign Up</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
