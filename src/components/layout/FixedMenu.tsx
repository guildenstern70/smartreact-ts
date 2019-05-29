/*
 * Copyright (c) Alessio Saltarin 2019.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './FixedMenu.css';

import { Container, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AnimatedLogo from '../AnimatedLogo';

const FixedMenu: React.FunctionComponent<{}> = () => (
    <Menu inverted>
        <Container>
            <Menu.Item as={Link} to="/home" header>
                <AnimatedLogo size="mini" />
                <div className="MenuTitle">SmartReact</div>
            </Menu.Item>

            <Menu.Item as={Link} to="/home">
                Home
            </Menu.Item>
            <Menu.Item as={Link} to="/anotherpage">
                Other Page
            </Menu.Item>

            <Dropdown item simple text="Your account">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/">
                        Logout
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                        <i className="dropdown icon" />
                        <span className="text">Submenu</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Menu>
);

export default FixedMenu;
