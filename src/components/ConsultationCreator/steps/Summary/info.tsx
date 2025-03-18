import { useState } from 'react';

import Step from '../../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';

import { Icon } from '@iconify/react';
import { ETime } from '../../../../types/enums';
import IConsultation from '../../../../types/consultation.type';

import { formatDate } from '../../../../libs/formatter';
import IUser from '../../../../types/user.type';
import useConsultations from '../../../../contexts/useCreator';

export default function Info() {
    const { date, time, subjects, teacher, building, room, color, max_students, end_signing_up, description, scopes } =
        useConsultations();

    const data: IConsultation = {
        date,
        time,
        subjects,
        teacher,
        building,
        room,
        color,
        max_students,
        end_signing_up,
        description,
        scopes,
    };
    return (
        <div className="consultation-info">
            <Title text="Informacje o konsultacji" icon="mdi:info" />

            <div className="info">
                {data.date ? (
                    <Item
                        icon="mdi:calendar"
                        label="Data"
                        value={
                            data.date > new Date()
                                ? formatDate(new Date(data.date)) + ' ' + ETime[data.time]
                                : 'Ta konsultacja już się odbyła'
                        }
                    />
                ) : (
                    ''
                )}
                {data.subjects ? <Item icon="mdi:book" label="Przedmiot" value={data.subjects.join(', ')} /> : ''}
                {data.teacher ? (
                    <Item icon="mdi:account" label="Nauczyciel" value={data.teacher?.name as string} />
                ) : (
                    ''
                )}
                {data.building ? <Item icon="mdi:building" label="Budynek" value={data.building} /> : ''}
                {data.room ? <Item icon="mdi:door" label="Sala" value={data.room} /> : ''}
                {data.max_students ? (
                    <Item
                        icon="mdi:chair-school"
                        label="Liczba miejsc"
                        value={
                            ((typeof data.students === 'number' && data.students) ||
                                (data.students as IUser[]).length) +
                            '/' +
                            data.max_students.toString()
                        }
                    />
                ) : (
                    ''
                )}
                {data.end_signing_up ? (
                    <Item
                        icon="mdi:clock"
                        label="Zapisy do"
                        value={
                            formatDate(data.end_signing_up) +
                            ' ' +
                            ((data.end_signing_up.getHours() > 9
                                ? data.end_signing_up.getHours()
                                : '0' + data.end_signing_up.getHours()) +
                                ':' +
                                (data.end_signing_up.getMinutes() > 9
                                    ? data.end_signing_up.getMinutes()
                                    : '0' + data.end_signing_up.getMinutes()))
                        }
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

function Item({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className="item">
            <div className="item-label">
                <Icon icon={icon} />
                <span className="label">{label}:</span>
            </div>
            <span className="value">{value}</span>
        </div>
    );
}

export function Title({ text, icon }: { text: string; icon?: string }) {
    return (
        <span className="title">
            {icon && <Icon icon={icon} />}
            {text}
        </span>
    );
}
