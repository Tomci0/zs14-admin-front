import { ReactNode } from 'react';

import Song from '../components/Queue/Song';
import Queue from '../components/Queue';

export default function QueuePage() {
    return (
        <Queue title="Kolejka Piosenek" className={'w-100 h-100'}>
            <Song title="Mefedron Love" artist="Targówek" duration="3:24" actualPlaying={true} />
        </Queue>
    );
}
