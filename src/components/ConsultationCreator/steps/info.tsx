import { useState } from 'react';

import Step from '../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

import DateInput from '../../../components/DateInput';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Info() {
    const [showSigningEnd, setShowSigningEnd] = useState(false);
    const [showDateRange, setShowDateRange] = useState(false);
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    function handleDateRangeChange(e: any) {
        setShowDateRange(e.target.checked);
    }

    return (
        <Step>
            <div className="title">Informacje o konsultacji</div>

            <div className="content">
                <form className="step-form" id="consultation-info-form">
                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Data Konsultacji</Form.Label>
                                <DateInput />
                                {/* <Form.Control type="date" id="inputPassword5" aria-describedby="passwordHelpBlock" /> */}
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
                                <Form.Label htmlFor="inputPassword5">Dodawanie Konsultacji na Okres</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    label="Czy chcesz dodać konsultacje na okres?"
                                    onChange={handleDateRangeChange}
                                />
                            </div>
                        </Col>

                        {showDateRange && (
                            <Col xs={12} lg={6} className="mb-2">
                                <div className="form-group">
                                    <Form.Label htmlFor="inputPassword5">Okres Konsultacji</Form.Label>
                                    <DateRangePicker onChange={onChange} value={value} />
                                </div>
                            </Col>
                        )}
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
