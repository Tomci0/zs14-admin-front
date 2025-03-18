import { useEffect } from 'react';

import Queue from '../components/Queue';
import Song from '../components/Queue/Song';

export default function Songs() {
    useEffect(() => {
        document.title = 'Piosenki od Użytkowników';
    }, []);
    
    return (
        <Queue title="Piosenki od Użytkowników" className="w-100 h-100 max-vh-100">
            <Song
                cover="https://placehold.co/100"
                title="Mefedron Love"
                artist="Targówek"
                duration="3:24"
                actions={{
                    info: true,
                    verification: true,
                }}
            />
        </Queue>
    );
}
