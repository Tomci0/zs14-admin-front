import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import SongInfoModal from './SongInfoModal';

export default function Song() {
    const [showInfo, setShowInfo] = useState(false);

    function handleAccept() {
        console.log('accept');
    }

    function handleReject() {
        console.log('reject');
    }

    return (
        <>
            <div className="song">
                <div className="cover">
                    <img src="https://via.placeholder.com/80" alt="asd" />
                </div>
                <div className="song-info">
                    <div className="title">Targowek - Kasia Kowalska</div>
                    <div className="artist">Kasia Kowalska</div>
                    <div className="duration">3:45</div>
                </div>
                <div className="song-actions">
                    <div className="action-btn btn-accept" onClick={handleAccept}>
                        <Icon icon="mdi:check" />
                    </div>
                    <div className="action-btn btn-reject" onClick={handleReject}>
                        <Icon icon="mdi:close" />
                    </div>

                    <div className="action-btn btn-info" onClick={() => setShowInfo(true)}>
                        <Icon icon="mdi:information-outline" />
                    </div>
                </div>
            </div>

            <SongInfoModal show={showInfo} setShow={setShowInfo} onAccept={handleAccept} onReject={handleReject} />
        </>
    );
}
