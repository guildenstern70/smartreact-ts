/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import TemplatePage from '../components/TemplatePage';
import { Button } from 'semantic-ui-react';

interface HomeProps {
    style: string;
}

interface HomeState {
    showMagicBox: boolean;
}

export default class Home extends React.Component<HomeProps, HomeState> {
    TITLE = 'Home';

    render(): React.ReactNode {
        return (
            <TemplatePage
                title={'Home Page'}
                description={Home.description()}
                buttons={
                    <div>
                        <Button onClick={this.handleClick} primary>
                            Magic Box
                        </Button>
                        <Button secondary>Stateful Box</Button>
                    </div>
                }
            />
        );
    }

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showMagicBox: false,
        };

        // Remember to bind event!
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.title = 'SmartReact | ' + this.TITLE;
    }

    handleClick(): void {
        console.log('New state: ' + JSON.stringify(this.state));
        this.setState({
            showMagicBox: !this.state.showMagicBox,
        });
    }

    static description(): string {
        return (
            'This is a template for a simple marketing or informational website.\n' +
            'It includes a large callout called a jumbotron and three\n' +
            'supporting pieces of content. Use it as a starting\n' +
            'point to create something more unique.'
        );
    }
}
