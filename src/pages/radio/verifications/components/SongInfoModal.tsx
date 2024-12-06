import { useState } from 'react';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function SongInfoModal({
    show,
    setShow,
    onAccept,
    onReject,
}: {
    show: boolean;
    setShow: (show: boolean) => void;
    onAccept: () => void;
    onReject: () => void;
}) {
    return (
        <Modal show={show} onHide={() => setShow(false)} centered className="song-info-modal" size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Informacje o Piosence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="song-info">
                    <div className="cover">
                        <img src="https://via.placeholder.com/250" alt="250" />
                    </div>
                    <div className="song-details">
                        <Item title="Wykonawca" value="Kasia Kowalska" icon="mdi:account-circle" />
                        <Item title="Tytuł" value="Targowek Mefedron" icon="mdi:music-circle" />
                        <Item title="Długość" value="3:45" icon="mdi:clock-outline" />
                        <Item title="Album" value="Mefedron" icon="mdi:album" />
                        <Item title="Rok Wydania" value="2024" icon="mdi:calendar-outline" />
                        <Item title="Gatunek" value="Pop" icon="mdi:music" />

                        <Item title="Źródło" value="YouTube" icon="mdi:youtube" />

                        <div className="song-actions">
                            <Button variant="none" className="btn-accept" onClick={onAccept}>
                                <Icon icon="mdi:check" />
                            </Button>
                            <Button variant="none" className="btn-reject" onClick={onReject}>
                                <Icon icon="mdi:close" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="lyrics">
                    <div className="lyrics-title">Tekst Piosenki</div>

                    <div className="lyrics-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui. Unde nemo accusantium
                        accusamus maiores recusandae neque excepturi modi! Temporibus laborum dolore quisquam atque,
                        possimus repellendus suscipit nostrum earum sunt!
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function Item({ title, value, icon }: { title: string; value: string; icon: string }) {
    return (
        <div className="info-item">
            <div className="info-item-title">
                <Icon icon={icon} />
                <span className="value">{title}:</span>
            </div>
            <div className="info-item-value">{value}</div>
        </div>
    );
}
