import React from 'react';

import './nav-list.scss';

export default function NavList({ children }: { children: React.ReactNode }) {
    return <div id="nav-list">{children}</div>;
}
