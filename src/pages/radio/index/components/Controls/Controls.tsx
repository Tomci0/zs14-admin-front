import React from 'react';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';

import { Icon } from '@iconify/react';

import './style.scss';

export default function Controls() {
    return (
        <Card>
            <Card.Header>
                <Icon className="icon" icon="mdi:play-pause" />
                <div className="title">Kontrolki</div>
            </Card.Header>
            <Card.Body className="controls-card">
                <div className="now-playing">
                    <div className="title">Targowek - Kasia Kowalska</div>
                    <div className="artist">Kasia Kowalska</div>
                </div>
                <div className="progress">
                    <ProgressBar min={0} max={100} now={50} />
                </div>
                <div className="controls">
                    <Button variant="none" className="control-btn">
                        <Icon icon="mdi:skip-previous" />
                    </Button>
                    <Button variant="none" className="play-btn">
                        <Icon icon="mdi:play" />
                    </Button>
                    <Button variant="none" className="control-btn">
                        <Icon icon="mdi:skip-next" />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
