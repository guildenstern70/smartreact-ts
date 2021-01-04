/*
 * Copyright (c) Alessio Saltarin 2019-2021
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
    children: React.ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = (props: TemplatePageProps) => (
    <MenuLayout>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Message>
                        <Message.Content>
                            <Message.Header>{props.title}</Message.Header>
                            <p>{props.description}</p>
                            {props.buttons}
                        </Message.Content>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        {props.children}
    </MenuLayout>
);

export default TemplatePage;
