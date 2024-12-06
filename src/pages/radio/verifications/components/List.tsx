import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import Song from './Song';

import './style.scss';

export default function Queue(props: any) {
    return (
        <Card {...props}>
            <Card.Header>
                <Icon className="icon" icon="mdi:music-circle" />
                <div className="title">Piosenki do Weryfikacji</div>
            </Card.Header>
            <Card.Body>
                <div className="queue-list">
                    <Song />
                    <Song />
                    <Song />
                    <Song />

                    <Song />

                    <Song />

                    <Song />

                    <Song />
                </div>
            </Card.Body>
        </Card>
    );
}
