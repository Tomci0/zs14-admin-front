import { ReactNode } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './style.scss';
import { title } from 'process';

interface QueueProps {
    children: ReactNode;
    title: string;
    [key: string]: any; // Pozwala na dodatkowe propsy
}

export default function Queue({ children, title, ...props }: QueueProps) {
    return (
        <Card {...props}>
            <Card.Header>
                <Icon className="icon" icon="mdi:queue-music" />
                <div className="title">{title}</div>
            </Card.Header>
            <Card.Body>
                <div className="queue-list">{children}</div>
            </Card.Body>
        </Card>
    );
}
