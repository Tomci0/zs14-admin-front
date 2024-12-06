import { useEffect } from 'react';

import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import List from './components/List';

// import './style.scss';

export default function Songs() {
    useEffect(() => {
        document.title = 'Piosenki od Użytkowników';
    }, []);

    return <List className="w-100 h-100 max-vh-100" />;
}
