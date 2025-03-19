import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import IConsultation from '../types/consultation.type';

import getConsultations from '../api/getConsultations';

interface ConsultationCreatorContextType extends IConsultation {
    setDate: (date: Date) => void;
    setTime: (time: number) => void;

    setDescription: (description: string) => void;
    setSubjects: (subjects: string[]) => void;
    setScopes: (material: IScope[]) => void;
    setBuilding: (building: string) => void;
    setRoom: (room: string) => void;
    setMaxStudents: (max_students: number) => void;
    setEndSigningUp: (end_signing_up: Date | undefined) => void;
}

const ConsultationCreatorContext = createContext<ConsultationCreatorContextType>({
    date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    time: 0,
    description: '<div><br></div>',
    subjects: [],
    scopes: [],

    setDate: () => {},
    setTime: () => {},
    setDescription: () => {},
    setSubjects: () => {},
    setScopes: () => {},
    setBuilding: () => {},
    setRoom: () => {},
    setMaxStudents: () => {},
    setEndSigningUp: () => {},
});

export function ConsultationCreatorProvider({ children }: { children: ReactNode }): JSX.Element {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState<number>(0);
    const [description, setDescription] = useState('');
    const [subjects, setSubjects] = useState<string[]>([]);
    const [scopes, setScopes] = useState<IScope[]>();
    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState('');
    const [max_students, setMaxStudents] = useState(0);
    const [end_signing_up, setEndSigningUp] = useState<Date | undefined>(undefined);

    return (
        <ConsultationCreatorContext.Provider
            value={{
                date,
                time,
                setDate,
                setTime,
                description,
                setDescription,
                subjects,
                setSubjects,
                scopes,
                setScopes,
                building,
                setBuilding,
                room,
                setRoom,
                max_students,
                setMaxStudents,
                end_signing_up,
                setEndSigningUp,
            }}
        >
            {children}
        </ConsultationCreatorContext.Provider>
    );
}

export default function useCreator() {
    return useContext(ConsultationCreatorContext);
}
