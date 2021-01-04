/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { StoreState } from '../redux/reducers/StoreState';

const mapState = (state: StoreState): StoreState => ({
    ...state,
});

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

class ReduxShow extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Store Content</Card.Header>
                    <Card.Description>Current messages in store:</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <ul>
                        {this.props.messages.map((message: string, i: number) => (
                            <li key={i.toString()}>{message}</li>
                        ))}
                    </ul>
                </Card.Content>
            </Card>
        );
    }
}

export default connector(ReduxShow);
