/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';

import { Grid, Message } from 'semantic-ui-react';
import MenuLayout from './MenuLayout';

interface TemplatePageProps {
    title: string;
    description: string;
    buttons: React.ReactNode;
}

export default class TemplatePage extends React.Component<TemplatePageProps> {
    render(): React.ReactNode {
        return (
            <MenuLayout>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Message>
                                <Message.Content>
                                    <Message.Header>{this.props.title}</Message.Header>
                                    <p>{this.props.description}</p>
                                    {this.props.buttons}
                                </Message.Content>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {this.props.children}
            </MenuLayout>
        );
    }
}
