import React from 'react';

import { Card, Carousel } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Creator from '../Creator';

import Info from './steps/info';
import Subjects from './steps/subjects';
import Material from './steps/material';

export default function ConsultationCreator() {
    return (
        <Card className="w-100">
            <Card.Header>
                <Icon className="icon" icon="mdi:plus" />
                <div className="title">Dodaj Konsultację</div>
            </Card.Header>
            <Card.Body>
                <Creator>
                    <Info />
                    <Subjects />
                    <Material />
                </Creator>
            </Card.Body>
        </Card>
    );
}
