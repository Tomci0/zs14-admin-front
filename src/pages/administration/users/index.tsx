import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import StatisticCard from '../../../components/StatisticCard';
import User from './User';

import { motion } from 'motion/react';

import './style.scss';
import IUser from '../../../types/user.type';
import { getApiUrl } from '../../../constants/functions';

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

    useEffect(() => {
        const getUsersCount = async () => {
            const response = await fetch(getApiUrl('users', 'count'));

            if (response.ok) {
                const data = await response.json();
                setUsersCount(data.data);
                setTotalPages(Math.ceil(data.data / maxUsers));
            }
        };

        const getUsers = async () => {
            setLoading(true);

            const response = await fetch(
                getApiUrl('users', `?page=${page}&max=${maxUsers}&search=${search}&sort=${sort}&order=${order}`)
            );
        };

        getUsersCount();
    }, []);

    return (
        <div id="users">
            <motion.div
                className="cards"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value={usersCount.toString()} />
                {/* <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value="123" /> */}
                {/* <StatisticCard title="Liczba Uzytkownikow" icon="mdi:users" value="123" /> */}
            </motion.div>

            <Card>
                <Card.Header>
                    <div className="title">Lista Uzytkownikow</div>
                </Card.Header>
                <Card.Body>
                    {loading && (
                        <motion.div
                            style={{
                                position: 'relative',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                marginTop: '2rem',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Spinner animation="border" variant="primary" />
                        </motion.div>
                    )}

                    {!loading && (
                        <motion.div
                            className="users-list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {users.map((user, index) => (
                                <User index={index} user={user} />
                            ))}
                        </motion.div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}
