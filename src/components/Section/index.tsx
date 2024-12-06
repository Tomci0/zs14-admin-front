import React from 'react';

import './style.scss';

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="section">
            <div className="section-title">{title}</div>
            <div className="section-content">{children}</div>
        </div>
    );
}
