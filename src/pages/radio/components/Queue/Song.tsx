import React from 'react';
import { Badge } from 'react-bootstrap';

export default function Song({
    cover = 'https://via.placeholder.com/100',
    title,
    artist,
    duration,
    actualPlaying = false,
}: {
    cover?: string;
    title: string;
    artist: string;
    duration: string;
    actualPlaying?: boolean;
}) {
    return (
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
            </div>
        </div>
    );
}
