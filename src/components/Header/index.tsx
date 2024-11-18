import React from 'react';

import './style.scss';
import ThemeChanger from './theme-picker';

import useAuth from '../../contexts/useAuth';

import { Dropdown } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function Header() {
    const { user } = useAuth();

    return (
        <div id="header">
            <div id="user">
                <ThemeChanger />

                <Dropdown>
                    <Dropdown.Toggle as="div" id="user">
                        <div id="image">
                            <img src={user?.image} alt="User Avatar" />
                        </div>

                        <div id="user-name">{user?.name}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu popperConfig={{ modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }}>
                        <Dropdown.Item href="/profile">
                            <Icon icon="mdi:account" />
                            <span className="name">Ustawienia Profilu</span>
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item href="/logout">
                            <Icon icon="mdi:logout" />
                            <span className="name">Wyloguj Się</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}
