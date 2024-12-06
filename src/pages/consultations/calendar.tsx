import { useEffect, useState } from 'react';
import { ConsultationProvider } from '../../contexts/useConsultations';

import Calendar from '../../components/Calendar';

export default function CalendarPage() {
    return (
        <ConsultationProvider>
            <Calendar />
        </ConsultationProvider>
    );
}
