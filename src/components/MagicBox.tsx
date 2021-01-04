/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Displayable from './Displayable';

interface MagicBoxProps {
    display: boolean;
    text: string;
}

export default class MagicBox extends React.Component<MagicBoxProps> {
    componentStyle: string;

    constructor(props: MagicBoxProps) {
        super(props);
        this.componentStyle = 'notdisplayed';
        console.log('Display magic box: ' + this.props.display);
    }

    render(): React.ReactNode {
        return (
            <Displayable display={this.props.display}>
                <Card>
                    <Image src="/img/matthew.png" wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.text}</Card.Header>
                        <Card.Meta>
                            <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>The box is in a card.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="user" />
                        22 Friends
                    </Card.Content>
                </Card>
            </Displayable>
        );
    }
}
