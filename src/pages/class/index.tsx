import React from 'react';
import { useParams } from 'react-router-dom';
import StatisticCard from '../../components/StatisticCard';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import './style.scss';
import Student from './Student';
import { Icon } from '@iconify/react';

export default function Class() {
    // get class id from params

    const classId = useParams<{ id: string }>().id;

    if (!classId) {
        return null;
    }

    return (
        <>
            <Row className="w-100">
                <Col xs={12} md={12} lg={6}>
                    <StatisticCard title="Najnowsza Piosenka" icon="mdi:music" value="Targowek - Kasia Kowalska" />
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <StatisticCard title="Liczba Uczniów" icon="mdi:person" value="21" />
                </Col>
            </Row>
            <Row className="w-100 mt-3">
                <Col>
                    <Card className="w-100">
                        <Card.Header>
                            <div className="title">Lista Uczniów</div>
                            <div className="actions">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id={`tooltip-top`}>Dodaj Ucznia/ów</Tooltip>}
                                >
                                    <div className="action-btn">
                                        <Icon icon="mdi:plus" />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="students-list">
                                <Student name="Jan Kowalski" />
                                <Student name="Adam Nowak" />
                                <Student name="Kasia Kowalska" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
