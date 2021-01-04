/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import { Button, Divider, Grid, Segment } from 'semantic-ui-react';
import TemplatePage from '../components/layout/TemplatePage';
import MagicBox from '../components/MagicBox';
import StatefulBox from '../components/StatefulBox';

interface HomeProps {
    style: string;
}

interface HomeState {
    showMagicBox: boolean;
    showStatefulBox: boolean;
}

export default class Home extends React.Component<HomeProps, HomeState> {
    TITLE = 'Home';

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showMagicBox: false,
            showStatefulBox: false,
        };

        // Remember to bind event!
        this.handleMagicClick = this.handleMagicClick.bind(this);
        this.handleStatefulClick = this.handleStatefulClick.bind(this);
    }

    componentDidMount(): void {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    handleMagicClick(): void {
        console.log('New magic state: ' + JSON.stringify(this.state));
        this.setState({
            showMagicBox: !this.state.showMagicBox,
        });
    }

    handleStatefulClick(): void {
        console.log('New stateful state: ' + JSON.stringify(this.state));
        this.setState({
            showStatefulBox: !this.state.showStatefulBox,
        });
    }

    render(): React.ReactNode {
        return (
            <TemplatePage
                title={'Home Page'}
                description={Home.description()}
                buttons={
                    <div>
                        <Button onClick={this.handleMagicClick} primary>
                            Magic Box
                        </Button>
                        <Button onClick={this.handleStatefulClick} secondary>
                            Stateful Box
                        </Button>
                    </div>
                }
            >
                <Segment>
                    <Grid columns={2} relaxed="very">
                        <Grid.Column>
                            <MagicBox display={this.state.showMagicBox} text="Magic Box" />
                        </Grid.Column>
                        <Grid.Column>
                            <StatefulBox display={this.state.showStatefulBox} />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>*</Divider>
                </Segment>
            </TemplatePage>
        );
    }

    static description(): string {
        return (
            'This is an example of modern React-Redux application.\n' +
            'It features integration with Semantic UI responsive library,\n' +
            "and it's written entiorely in Typescript."
        );
    }
}
