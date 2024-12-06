import { useState } from 'react';

import Step from '../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

export default function Info() {
    const [showSigningEnd, setShowSigningEnd] = useState(false);

    return (
        <Step>
            <div className="title">Informacje o konsultacji</div>

            <div className="content">
                <form className="step-form" id="consultation-info-form">
                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Data Konsultacji</Form.Label>
                                <Form.Control type="date" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Godzina Konsultacji</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Wybierz godzinę</option>
                                    <option value="1">8:00-8:45</option>
                                    <option value="2">8:50-9:35</option>
                                    <option value="3">9:40-10:25</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Częstotliwość Powtarzalności</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Brak</option>
                                    <option value="1">Co tydzień</option>
                                    <option value="2">Co 2 tygodnie</option>
                                    <option value="3">Co 3 tygodnie</option>
                                    <option value="4">Co miesiąc</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Ostateczna data zapisu</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={(e) => setShowSigningEnd(e.target.value !== '0')}
                                >
                                    <option value="0">Brak</option>
                                    <option value="1">Dzień wcześniej</option>
                                    <option value="2">2 dni wcześniej</option>
                                    <option value="3">3 dni wcześniej</option>
                                    <option value="4">4 dni wcześniej</option>
                                </Form.Select>
                            </div>
                        </Col>
                        {showSigningEnd && (
                            <Col xs={12} lg={6} className="mb-2">
                                <div className="form-group">
                                    <Form.Label htmlFor="inputPassword5">Ostateczna godzina zapisu</Form.Label>
                                    <Form.Control
                                        type="time"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </div>
                            </Col>
                        )}
                    </Row>
                </form>
            </div>
        </Step>
    );
}
