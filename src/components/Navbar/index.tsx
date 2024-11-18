import React from 'react';

import './style.scss';

import logo from './zs14-logo.png';

import NavItem from './components/NavItem';
import NavCategory from './components/NavCategory';
import useAuth from '../../contexts/useAuth';

import navItems from '../../constants/navItems';

const mainMenuStyle: React.CSSProperties = {
    height: '85%',
    maxHeight: '85%',
    overflowY: 'auto',
};

export default function Navbar() {
    const { hasPermission } = useAuth();

    const renderNavItems = (items: INavItem[]) => {
        return items.map((item) => {
            if (item.items && item.items.length > 0) {
                return (
                    (!item.permission || hasPermission(item.permission)) && (
                        <NavCategory key={item.title} label={item.title}>
                            {renderNavItems(item.items)}
                        </NavCategory>
                    )
                );
            }

            return (
                (!item.permission || hasPermission(item.permission)) && (
                    <NavItem
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        to={item.path}
                        tooltip={item.tooltip}
                    />
                )
            );
        });
    };

    return (
        <div id="navbar">
            <div id="logo">
                <img src={logo} alt="ZS14 Logo" />
            </div>
            <NavCategory style={mainMenuStyle} label="Nawigacja" type="main-menu">
                {renderNavItems(navItems as INavItem[])}
            </NavCategory>
            <div id="navigation"></div>
            <div id="footer">
                {/* Copyright */}

                <div id="copyright">
                    <span>
                        Copyright &copy; {new Date().getFullYear()} <span id="author">tomcio.space</span> for ZS14
                    </span>
                </div>
            </div>
        </div>
    );
}
