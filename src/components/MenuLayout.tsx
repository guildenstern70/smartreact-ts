/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import FixedMenu from './FixedMenu';
import { Container, Header } from 'semantic-ui-react';

interface MenuLayoutProps {
    children?: React.ReactNode;
}

export default class MenuLayout extends React.Component<MenuLayoutProps> {
    render(): React.ReactNode {
        document.title = 'SmartReact TS';
        return (
            <Container>
                <Header>
                    <FixedMenu />
                </Header>
                {this.props.children}
            </Container>
        );
    }
}
