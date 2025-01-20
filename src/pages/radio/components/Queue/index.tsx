import { ReactNode } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './style.scss';

interface QueueProps {
    children: ReactNode;
    title: string;
    actions?: {
        refresh: boolean;
        add_song: boolean;
    };

    [key: string]: any; // Pozwala na dodatkowe propsy
}

export default function Queue({
    children,
    title,
    actions = {
        refresh: false,
        add_song: false,
    },
    ...props
}: QueueProps) {
    return (
        <Card {...props}>
            <Card.Header>
                <Icon className="icon" icon="mdi:queue-music" />
                <div className="title">{title}</div>

                <div className="actions">
                    {actions.refresh && (
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-top`}>Odświeź</Tooltip>}>
                            <div className="action-btn">
                                <Icon icon="mdi:refresh" />
                            </div>
                        </OverlayTrigger>
                    )}

                    {actions.add_song && (
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-top`}>Dodaj Piosenkę</Tooltip>}>
                            <div className="action-btn">
                                <Icon icon="mdi:plus" />
                            </div>
                        </OverlayTrigger>
                    )}
                </div>
            </Card.Header>
            <Card.Body>
                <div className="queue-list">{children}</div>
            </Card.Body>
        </Card>
    );
}
