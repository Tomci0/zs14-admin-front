import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StatisticCard from '../../../../components/StatisticCard';

export default function Statistics() {
    return (
        <>
            <Col xs={12} md={12} lg={3}>
                <StatisticCard title="Najnowsza Piosenka" icon="mdi:music" value="Targowek - Kasia Kowalska" />
            </Col>
            <Col xs={12} md={12} lg={3}>
                <StatisticCard
                    title="Najczęściej Odtwarzana Piosenka"
                    icon="mdi:music"
                    value="Targowek - Kasia Kowalska Mefedron"
                />
            </Col>
            <Col xs={12} md={12} lg={3}>
                <StatisticCard
                    title="Piosenki Do Weryfikacji"
                    icon="mdi:shield-check"
                    value="100"
                    href="/radio/songs"
                />
            </Col>
            <Col xs={12} md={12} lg={3}>
                <StatisticCard title="Piosenki w kolejce" icon="mdi:queue-music" value="100" href="/radio/queue" />
            </Col>
        </>
    );
}
