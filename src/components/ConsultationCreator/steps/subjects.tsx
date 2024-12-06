import { useState } from 'react';

import Step from '../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

export default function Subjects() {
    return (
        <Step>
            <div className="title">Przedmioty Konsultacji</div>

            <div className="content">
                <form className="step-form subjects-form">
                    <div className="subjects-list">
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={'checkbox'}
                            label={'Przedmiot 1'}
                        />
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={'checkbox'}
                            label={'Przedmiot 1'}
                        />
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={'checkbox'}
                            label={'Przedmiot 1'}
                        />
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={'checkbox'}
                            label={'Przedmiot 1'}
                        />
                    </div>
                </form>
            </div>
        </Step>
    );
}
