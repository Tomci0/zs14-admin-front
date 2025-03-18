import { useState } from 'react';

import Step from '../../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

import { Icon } from '@iconify/react';
import { ETime } from '../../../../types/enums';
import IConsultation from '../../../../types/consultation.type';

import { formatDate } from '../../../../libs/formatter';
import IUser from '../../../../types/user.type';
import useConsultations from '../../../../contexts/useCreator';
import Info from './info';
import Scopes from './Scopes';
import './style.scss';

export default function ConsultationSummary() {
    return (
        <Step>
            <div className="title">Podsumowanie</div>

            <div className="content">
                <Row>
                    <Col>
                        <Info />
                    </Col>
                    <Col>
                        <Scopes />
                    </Col>
                </Row>
            </div>
        </Step>
    );
}
