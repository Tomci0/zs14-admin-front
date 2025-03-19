import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import StatisticCard from '../../../components/StatisticCard';
import User from './User';

import { motion } from 'motion/react';

import './style.scss';
import IUser from '../../../types/user.type';
import { getApiUrl } from '../../../constants/functions';
import Pagination from '../../../components/Pagination';
import { AnimatePresence } from 'framer-motion';

export default function Users() {
    const [users, setUsers] = useState<IUser[]>([]);

    const [usersCount, setUsersCount] = useState<number>(0);
    const maxUsers = 10;
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const [sort, setSort] = useState<string>('name');
    const [order, setOrder] = useState<string>('asc');

    const [loading, setLoading] = useState<boolean>(true);

    const getUsers = async () => {
        setLoading(true);

        const response = await fetch(getApiUrl('users', `all?limit=${maxUsers}&page=${page}`), {
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json();
            setUsers(data.data as IUser[]);
            setTimeout(() => setLoading(false), 500);
        }
    };

    useEffect(() => {
        const getUsersCount = async () => {
            const response = await fetch(getApiUrl('users', 'count'));

            if (response.ok) {
                const data = await response.json();
                setUsersCount(data.data);
                setTotalPages(Math.ceil(data.data / maxUsers));
            }
        };

        getUsersCount();
        getUsers();
    }, []);

    useEffect(() => {
        getUsers();
    }, [page]);

    return (
        <div id="users">
            <motion.div
                className="cards"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
                }}
            >
                <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value={usersCount.toString()} />
                {/* <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value="123" /> */}
                {/* <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value="123" /> */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4,
                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
                }}
            >
                <Card>
                    <Card.Header>
                        <div className="title">Lista Uzytkownikow</div>
                    </Card.Header>
                    <Card.Body>
                        <AnimatePresence mode="wait">
                            {loading && (
                                <motion.div
                                    key="spinner"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minHeight: '200px',
                                        overflow: 'hidden',
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            border: '4px solid rgba(1, 146, 50, 0.2)',
                                            borderTopColor: '#019232',
                                            borderLeftColor: '#019232',
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    />
                                </motion.div>
                            )}

                            {!loading && (
                                <motion.div
                                    key="users"
                                    className="users-list"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {users.map((user, index) => (
                                        <User index={index} user={user} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            // exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5 + totalPages * 0.05, // Stopniowa animacja kolejnych elementów
                            }}
                        >
                            <Pagination pages={totalPages} currentPage={page} setPage={setPage} />
                        </motion.div>
                    </Card.Body>
                </Card>
            </motion.div>
        </div>
    );
}
