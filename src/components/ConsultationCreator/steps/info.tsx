import { ChangeEventHandler, useEffect, useState } from 'react';

import Step from '../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

import DateInput from '../../../components/DateInput';

import useCreator from '../../../contexts/useCreator';

import DateRangeInput from '../../DateRangeInput';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Info() {
    const [showSigningEnd, setShowSigningEnd] = useState(false);
    const [daySigningEnd, setDaySigningEnd] = useState(0);
    const [hourSigningEnd, setHourSigningEnd] = useState('12:00');
    const {
        date,
        setDate,
        time,
        setTime,
        end_signing_up,
        setEndSigningUp,
        building,
        setBuilding,
        room,
        setRoom,
        max_students,
        setMaxStudents,
    } = useCreator();

    useEffect(() => {
        if (end_signing_up) {
            const datesDiffrent = date.getDate() - end_signing_up.getDate();
            setDaySigningEnd(datesDiffrent);
            setShowSigningEnd(true);
            const hours = end_signing_up.getHours().toString().padStart(2, '0');
            const minutes = end_signing_up.getMinutes().toString().padStart(2, '0');
            setHourSigningEnd(`${hours}:${minutes}`);
        }
    });

    return (
        <Step>
            <div className="title">Informacje o konsultacji</div>

            <div className="content">
                <form className="step-form" id="consultation-info-form">
                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Data Konsultacji</Form.Label>
                                <DateInput value={date} setValue={setDate} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Godzina Konsultacji</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        setTime(Number(e.currentTarget.value));
                                    }}
                                    value={time}
                                >
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
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="inputPassword5">Maksymalna Liczba Osób</Form.Label>
                                <Form.Control
                                    type="number"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    placeholder="Maksymalna Liczba Osób"
                                    min={1}
                                    max={50}
                                    value={max_students}
                                    onChange={(e) => {
                                        setMaxStudents(Number(e.target.value));
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <Form.Group className="form-group">
                                <Form.Label>Budynek</Form.Label>
                                <Form.Select
                                    value={building}
                                    onChange={(e) => {
                                        setBuilding(e.currentTarget.value);
                                    }}
                                >
                                    <option value="0">Wybierz budynek</option>
                                    <option value={1}>ul. Szanajcy 5</option>
                                    <option value={2}>ul. Szanajcy 14/16</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {(!building || building != '0') && (
                            <Col>
                                <Form.Group className="form-group">
                                    <Form.Label>Sala</Form.Label>
                                    <Form.Select
                                        value={room}
                                        onChange={(e) => {
                                            setRoom(e.currentTarget.value);
                                        }}
                                    >
                                        <option value="0">Wybierz budynek</option>
                                        <option value={1}>ul. Szanajcy 5</option>
                                        <option value={2}>ul. Szanajcy 14/16</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        )}
                    </Row>
                    {/* <Row>
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

                                    <DateRangeInput />
                                </div>
                            </Col>
                        )}
                    </Row> */}

                    <Row>
                        <Col xs={12} lg={6} className="mb-2">
                            <div className="form-group">
                                <Form.Label htmlFor="inputPassword5">Ostateczna data zapisu</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    value={daySigningEnd}
                                    onChange={(e) => {
                                        setShowSigningEnd(e.target.value !== '0');

                                        if (e.target.value !== '0') {
                                            const endDate = new Date();
                                            endDate.setDate(date.getDate() - Number(e.target.value));

                                            setEndSigningUp(endDate);
                                        }
                                    }}
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
                                        value={hourSigningEnd}
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            end_signing_up?.setHours(
                                                Number(e.target.value.split(':')[0]),
                                                Number(e.target.value.split(':')[1])
                                            );

                                            setEndSigningUp(new Date(end_signing_up as Date));
                                        }}
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
