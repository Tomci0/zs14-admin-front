import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppCard from '../components/AppCard';
import Section from '../components/Section';

import useAuth from '../contexts/useAuth';

export default function Index() {
    const { user } = useAuth();

    return (
        <>
            <Section title="Twoje aplikacje">
                <AppCard
                    title="Konsultacje"
                    icon="mdi:calendar-month"
                    to="/consultations/calendar"
                    description="Zarządzanie konsultacjami"
                />
                <AppCard title="Radiowezel" icon="mdi:radio" to="/radio/" description="Zarządzanie radiowezlem" />
                <AppCard title="E-Sport" icon="mdi:gamepad" to="/esport/calendar" description="Zarządzanie e-sportem" />
            </Section>
        </>
    );
}
