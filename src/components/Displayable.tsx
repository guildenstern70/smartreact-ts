/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './Displayable.css';

interface DisplayableProps {
    display: boolean;
    floatRight: boolean;
}

export default class Displayable extends React.Component<DisplayableProps> {

    static defaultProps = {
        floatRight: false,
    };

    componentStyle: string;

    constructor(props: DisplayableProps) {
        super(props);
        this.componentStyle = 'notdisplayed';
        console.log('Display card: ' + this.props.display + '(Right? ' + this.props.floatRight + ')');
    }

    componentDidMount(): void {
        this.updateVisibility();
    }

    updateVisibility(): void {
        if (this.props.display) {
            if (this.props.floatRight) {
                this.componentStyle = 'displayedRight';
            } else {
                this.componentStyle = 'displayed';
            }
        } else {
            this.componentStyle = 'notdisplayed';
        }
    }

    render(): React.ReactNode {
        this.updateVisibility(); // Update visibility on each new rendering
        return <div className={this.componentStyle}>{this.props.children}</div>;
    }
}
