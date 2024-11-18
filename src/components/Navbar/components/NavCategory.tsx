import { useState } from 'react';

import './NavCategory.scss';

import { Collapse } from 'react-bootstrap';

import { Icon } from '@iconify/react';

import NavList from './NavList';

export default function NavCategory({
    children,
    label,
    type = 'sub-menu',
    style,
    collapsed = false,
}: {
    children: React.ReactNode;
    label: string;
    type?: 'main-menu' | 'sub-menu';
    style?: React.CSSProperties;
    collapsed?: boolean;
}) {
    const [isCollapsed, setCollapsed] = useState(collapsed);

    return (
        <div className="nav-category" style={style}>
            <div className="divider" onClick={() => setCollapsed(!isCollapsed)}>
                <div className={`pill ${type === 'main-menu' && 'label'}`}>
                    <Icon icon={isCollapsed ? 'mdi:chevron-up' : 'mdi:chevron-down'} />

                    <span className="label-text">{label}</span>
                </div>
            </div>
            <Collapse in={!isCollapsed}>
                <div className="nav-category-content">
                    <NavList>{children}</NavList>
                </div>
            </Collapse>
        </div>
    );
}
