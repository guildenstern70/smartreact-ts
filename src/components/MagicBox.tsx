/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './MagicBox.css';

interface MagicBoxProps {
    display: boolean;
    text: string;
}

export default class MagicBox extends React.Component<MagicBoxProps> {
    constructor(props: MagicBoxProps) {
        super(props);
        console.log('Display magic box: ' + this.props.display);
    }

    displayOrNot(): string {
        if (this.props.display) {
            return 'magicbox aqua displayed';
        }
        return 'magicbox aqua notdisplayed';
    }

    render(): React.ReactNode {
        const style = this.displayOrNot();
        return <div className={style}>{this.props.text}</div>;
    }
}
