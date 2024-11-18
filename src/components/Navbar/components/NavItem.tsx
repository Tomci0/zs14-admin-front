import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';

import './nav-item.scss';

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';

export default function NavItem({
    title,
    icon,
    to,
    tooltip,
}: {
    title: string;
    icon: string;
    to: string;
    tooltip?: string;
}) {
    const location = useLocation();

    const [active, setActive] = useState<boolean>(location.pathname === to);

    useEffect(() => {
        setActive(location.pathname === to);
    }, [location.pathname, to]);

    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            {tooltip}
        </Tooltip>
    );

    if (tooltip) {
        return (
            <OverlayTrigger placement="right" overlay={renderTooltip}>
                <NavLink to={to} className={'nav-item ' + (active ? 'active' : '')}>
                    <div id="pill">
                        <Icon icon={icon} />
                    </div>
                    <div className="title">{title}</div>
                </NavLink>
            </OverlayTrigger>
        );
    }

    return (
        <NavLink to={to} className={'nav-item ' + (active ? 'active' : '')}>
            <div id="pill">
                <Icon icon={icon} />
            </div>
            <div className="title">{title}</div>
        </NavLink>
    );
}
