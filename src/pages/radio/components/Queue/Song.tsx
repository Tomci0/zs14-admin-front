import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import SongInfoModal from './SongInfoModal';

interface SongProps {
    cover: string;
    title: string;
    artist: string;
    duration: string;

    actions: {
        actualPlaying?: boolean;
        verification?: boolean;
        info?: boolean;
    };
}

export default function Song({
    cover = 'https://placehold.co/100',
    title,
    artist,
    duration,
    actions: { actualPlaying = false, verification = false, info = true },
}: SongProps) {
    const [showInfo, setShowInfo] = useState(false);

    function handleAccept() {}

    function handleReject() {}

    return (
        <>
            <div className="song">
                <div className="cover">
                    <img src={cover} alt="asd" />
                </div>
                <div className="song-info">
                    <div className="title">{title}</div>
                    <div className="artist">{artist}</div>
                    <div className="duration">{duration}</div>
                </div>
                <div className="song-actions">
                    {actualPlaying && (
                        <div className="actual-playing">
                            <Badge>Aktualnie Odtwarzana</Badge>
                        </div>
                    )}

                    {verification && (
                        <>
                            <div className="action-btn btn-accept" onClick={handleAccept}>
                                <Icon icon="mdi:check" />
                            </div>
                            <div className="action-btn btn-reject" onClick={handleReject}>
                                <Icon icon="mdi:close" />
                            </div>
                        </>
                    )}

                    {info && (
                        <div className="action-btn btn-info" onClick={() => setShowInfo(true)}>
                            <Icon icon="mdi:information-outline" />
                        </div>
                    )}
                </div>
            </div>

            <SongInfoModal
                show={showInfo}
                setShow={setShowInfo}
                onAccept={handleAccept}
                onReject={handleReject}
                verification={verification}
            />
        </>
    );
}
