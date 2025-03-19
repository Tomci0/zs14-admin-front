import React from 'react';
import { useParams } from 'react-router-dom';
import StatisticCard from '../../../components/StatisticCard';
import { Col, Row } from 'react-bootstrap';
import IUser from '../../../types/user.type';

import { motion } from 'framer-motion';

export default function User({ index, user }: { index: number; user: IUser }) {
    return (
        <motion.div
            key={user._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.05, // Stopniowa animacja kolejnych elementów
            }}
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
