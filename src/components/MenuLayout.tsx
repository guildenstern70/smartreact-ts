import React from 'react';
import FixedMenu from './FixedMenu';
import { Container, Header } from 'semantic-ui-react';

interface MenuLayoutProps {
    children?: React.ReactNode;
}

export default class MenuLayout extends React.Component<MenuLayoutProps>
{
    constructor(props: MenuLayoutProps) {
        super(props);
    }

    render(): React.ReactNode {
        document.title = 'SmartReact';
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
