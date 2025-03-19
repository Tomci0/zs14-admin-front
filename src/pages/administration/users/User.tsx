import React from 'react';
import { useParams } from 'react-router-dom';
import StatisticCard from '../../../components/StatisticCard';
import { Col, Row } from 'react-bootstrap';
import IUser from '../../../types/user.type';

import { motion } from 'framer-motion';

export default function User({ index, user }: { index: number; user: IUser }) {
    console.log(user);
    return (
        <motion.div
            key={user._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Animacja wyjścia - wszystkie elementy znikają równocześnie z przesunięciem w górę
            exit={{
                opacity: 0,
                y: -20,
                transition: {
                    duration: 0.3,
                    delay: 0, // Brak opóźnienia przy wyjściu
                },
            }}
            // Animacja wejścia ma opóźnienie zależne od indeksu
            transition={{
                duration: 0.4,
                delay: 0.05 + index * 0.02, // Stopniowa animacja kolejnych elementów
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: {
                    duration: 0.1,
                    delay: 0,
                },
            }}
            whileTap={{ scale: 0.97, transition: { duration: 0.05, delay: 0 } }}
            className="user"
        >
            <div
                className={
                    'name ' +
                    (user.isAdmin && 'admin') +
                    ((user.isClassTeacher && 'classTeacher') || (user.isTeacher && 'teacher'))
                }
            >
                {user.name} {(user.isClassTeacher && '(Wychowawca)') || (user.isTeacher && '(Nauczyciel)')}{' '}
                {user.isAdmin && '(Admin)'}
            </div>
            <div className="email">{user.class}</div>
        </motion.div>
    );
}
