/*
 * Copyright (c) Alessio Saltarin 2020.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Button, Card, Form } from 'semantic-ui-react';
import { StoreState } from '../redux/reducers/StoreState';
import { AllTypes } from '../redux/Types';

interface OwnState {
    typedMessage: string;
}

const mapState = (state: StoreState): StoreState => ({
    ...state,
});

const mapDispatch = {
    addMessage: (message: string): AllTypes => ({ type: 'ADD_MESSAGE', message }),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

class ReduxController extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            typedMessage: '',
        };
    }

    addMessageToStore = (message: string): void => {
        if (message.length > 0) {
            console.log('Adding message to store: ' + message);
            this.setState({
                typedMessage: '',
            });
            this.props.addMessage(message);
        }
    };

    onChangeRequest = (event: ChangeEvent<HTMLInputElement>): void => {
        const currentInputValue = event.target.value;
        this.setState({
            typedMessage: currentInputValue,
        });
    };

    render(): React.ReactNode {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Add to Store</Card.Header>
                    <Card.Meta>Store Container</Card.Meta>
                    <Card.Description>Add a string to the application Store.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Form>
                        <Form.Field>
                            <label>Message</label>
                            <input
                                placeholder="Type here message to add"
                                onChange={this.onChangeRequest}
                                value={this.state.typedMessage}
                            />
                        </Form.Field>
                        <Button primary onClick={(): void => this.addMessageToStore(this.state.typedMessage)}>
                            Add
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}

export default connector(ReduxController);
