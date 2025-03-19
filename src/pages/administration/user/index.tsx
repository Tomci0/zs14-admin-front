import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const userId = useParams<{ id: string }>().id;

    return <div className="asd">User profile {userId}</div>;
}
