import { Icon } from '@iconify/react';
import react from 'react';

export default function Student({ name }: { name: string }) {
    return (
        <div className="student">
            <Icon icon="mdi:account" />
            <span className="name">{name}</span>
        </div>
    );
}
