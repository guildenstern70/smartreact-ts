/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import TemplatePage from '../components/layout/TemplatePage';
import ReduxController from '../components/ReduxController';
import ReduxShow from '../components/ReduxShow';

interface AnotherPageProps {
    style: string;
}

export default class AnotherPage extends React.Component<AnotherPageProps> {
    TITLE = 'Redux Example';

    static description(): string {
        return 'This is an example of a Redux store implemented in React.';
    }

    render(): React.ReactNode {
        return (
            <TemplatePage
                title={'Redux Example'}
                description={AnotherPage.description()}
                buttons={
                    <div>
                        <Button secondary>More info...</Button>
                    </div>
                }
            >
                <Grid columns={3}>
                    <Grid.Column width={6}>
                        <ReduxController />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ReduxShow />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        &nbsp;
                    </Grid.Column>
                </Grid>
            </TemplatePage>
        );
    }
}
