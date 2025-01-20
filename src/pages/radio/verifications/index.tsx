import { useEffect } from 'react';

import Queue from '../components/Queue';
import Song from '../components/Queue/Song';

import yts from 'yt-search';

export default function Songs() {
    useEffect(() => {
        document.title = 'Piosenki od Użytkowników';
    }, []);

    console.log(yts({ videoId: 'IBr0_Sj64Mk' }));

    // return <List className="w-100 h-100 max-vh-100" />;
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
