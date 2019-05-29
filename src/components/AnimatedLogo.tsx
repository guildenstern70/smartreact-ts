/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './AnimatedLogo.css';

import logo from './logo.svg';
import { Image, SemanticSIZES } from 'semantic-ui-react';

interface AnimatedProps {
    size: SemanticSIZES;
}

export default class AnimatedLogo extends React.Component<AnimatedProps, {}> {
    static defaultProps = {
        size: 'mini',
    };

    constructor(props: AnimatedProps) {
        super(props);
        console.log('Display animated logo: ' + this.props.size);
    }

    render(): React.ReactNode {
        return <Image size={this.props.size} src={logo} className="App-logo" alt="logo" />;
    }
}
