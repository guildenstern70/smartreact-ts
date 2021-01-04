/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import FixedMenu from './FixedMenu';
import { Container, Header } from 'semantic-ui-react';

interface MenuLayoutProps {
    children: React.ReactNode;
}

const MenuLayout: React.FC<MenuLayoutProps> = (props: MenuLayoutProps) => {
    document.title = 'SmartReact TS';
    return (
        <Container>
            <Header>
                <FixedMenu />
            </Header>
            {props.children}
        </Container>
    );
};

export default MenuLayout;
