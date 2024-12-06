import React from 'react';
import { useLocation } from 'react-router-dom';

import './style.scss';
import ThemeChanger from './theme-picker';

import useAuth from '../../contexts/useAuth';

import { Dropdown, Breadcrumb } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function Header() {
    const { user } = useAuth();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

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
