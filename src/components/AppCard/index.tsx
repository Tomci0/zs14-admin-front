import React from 'react';

import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default function AppCard({
    title,
    to,
    description,
    icon,
}: {
    title: string;
    to: string;
    description: string;
    icon: string;
}) {
    return (
        <NavLink className="app-card" to={to}>
            <Icon icon={icon} />

            <div className="content">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </NavLink>
    );
}
