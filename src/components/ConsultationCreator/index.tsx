import React from 'react';

import { Card, Carousel } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Creator from '../Creator';

import Info from './steps/info';
import Subjects from './steps/subjects';
import Material from './steps/material';
import Summary from './steps/Summary';
import { ConsultationCreatorProvider } from '../../contexts/useCreator';
interface IConsultationForm {
    date: Date;
    time: Number;
    consultationInterval: [Date, Date] | boolean;
    end_signing: Date | boolean;

    description: string;

    subjects: string[];
    material: string;
}

export default function ConsultationCreator() {
    return (
        <Card className="w-100">
            <Card.Header>
                <Icon className="icon" icon="mdi:plus" />
                <div className="title">Dodaj Konsultację</div>
            </Card.Header>
            <Card.Body>
                <ConsultationCreatorProvider>
                    <Creator>
                        <Info />
                        <Subjects />
                        <Material />
                        <Summary />
                    </Creator>
                </ConsultationCreatorProvider>
            </Card.Body>
        </Card>
    );
}
