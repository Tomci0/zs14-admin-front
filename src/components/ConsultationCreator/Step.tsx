import { useState } from 'react';

import './style.scss';

export default function Step({ children }: { children: React.ReactNode }) {
    return <div className="step">{children}</div>;
}
