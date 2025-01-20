import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Statistics from './components/Statistics';
import Controls from './components/Controls/Controls';
import Queue from '../components/Queue';
import Song from '../components/Queue/Song';

export default function Radio() {
    useEffect(() => {
        document.title = 'Radiowęzeł';
    }, []);

    return (
        <Container fluid>
            <Row>
                <Statistics />
            </Row>
            <Row style={{ marginTop: '1rem', justifyContent: 'center' }}>
                <Col xs={12} md={8} lg={8}>
                    <Controls />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} md={12} lg={12}>
                    <Queue title="Kolejka Piosenek">
                        <Song
                            cover="https://placehold.co/100"
                            title="Mefedron Love"
                            artist="Targówek"
                            duration="3:24"
                            actions={{
                                info: true,
                                actualPlaying: true,
                            }}
                        />
                    </Queue>
                </Col>
            </Row>
        </Container>
    );
}
