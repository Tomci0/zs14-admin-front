import React from 'react';

import Song from '../components/Queue/Song';
import Queue from '../components/Queue';

export default function QueuePage() {
    return (
        <Queue
            title="Kolejka Piosenek"
            className={'w-100 h-100'}
            actions={{
                add_song: true,
                refresh: true,
            }}
        >
            <Song
                cover="https://placehold.co/100"
                title="Mefedron Love"
                artist="Targówek"
                duration="3:24"
                actions={{
                    info: true,
                    actualPlaying: true,
                }}
            />
            <Song
                cover="https://placehold.co/100"
                title="Mefedron Love"
                artist="Targówek"
                duration="3:24"
                actions={{
                    info: true,
                    actualPlaying: false,
                }}
            />
        </Queue>
    );
}
