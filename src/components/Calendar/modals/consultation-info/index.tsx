import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import IConsultation from '../../../../types/consultation.type';
import './style.scss';

import { Icon } from '@iconify/react';

import Info from './Info';
import SigningForm from './SigningForm';
import Scopes from './Scopes';

import { notify } from '../../../../libs/notifications';

import useAuth from '../../../../contexts/useAuth';
import useConsultations from '../../../../contexts/useConsultations';

export default function ConsultationInfoModal({
    show,
    setShow,
    consultationData,
    hideButton = false,
}: {
    show: boolean;
    setShow: (show: boolean) => void;
    consultationData: IConsultation;
    hideButton?: boolean;
}) {
    const [signButtonDisabled, setSignButtonDisabled] = useState<boolean>(false);
    const [showSign, setShowSign] = useState<boolean>(false);

    // FROM VALUES

    const [currentOption, setCurrentOption] = useState<string>('');
    const [currentScope, setCurrentScope] = useState<string | number>('');

    const canSign = (consultationData.end_signing_up && new Date() < consultationData.end_signing_up) || false;
    const canUnsign = new Date() < consultationData.date;

    const { isLogged } = useAuth();
    const { refreshConsultations } = useConsultations();

    // function submitForm() {
    //     if (!currentOption) {
    //         notify('Nie wybrano celu wizyty', {
    //             type: 'error',
    //         });
    //         return;
    //     }

    //     if (!currentScope) {
    //         notify('Nie wpisano celu wizyty', {
    //             type: 'error',
    //         });
    //         return;
    //     }

    //     async function api() {
    //         setSignButtonDisabled(true);
    //         const response = await signToConsultations(consultationData._id, currentOption, currentScope);

    //         if (response) {
    //             setShowSign(false);
    //             setShow(false);
    //             setSignButtonDisabled(false);
    //             refreshConsultations();
    //         } else {
    //             setSignButtonDisabled(false);
    //         }
    //     }

    //     api();
    // }

    // function unsignHandler() {
    //     async function api() {
    //         const response = await unsignFromConsultation(consultationData._id);

    //         if (response) {
    //             setShow(false);
    //             refreshConsultations();
    //         }
    //     }

    //     api();
    // }

    return (
        <>
            <Modal
                show={show}
                onHide={() => {
                    setShow(false);
                }}
                id="consultation-info"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Informajce o konsultacji</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Info data={consultationData} />
                        </Col>
                        <Col>
                            <Scopes scopes={consultationData.scopes} description={consultationData.description} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {hideButton !== true && isLogged && !consultationData.isSigned && canSign && (
                        <Button
                            className="btn-modal"
                            variant="none"
                            onClick={() => {
                                setShow(false);
                                setShowSign(true);
                            }}
                        >
                            <Icon icon="mdi:pen" />
                            <span className="btn-text">Zapisz się</span>
                        </Button>
                    )}

                    {isLogged && consultationData.isSigned && canUnsign && (
                        // <Button className="btn-modal btn-cancel" variant="none" onClick={() => unsignHandler()}>
                        //     <Icon icon="mdi:pen" />
                        //     <span className="btn-text">Wypisz się</span>
                        // </Button>
                        <></>
                    )}
                </Modal.Footer>
            </Modal>

            {isLogged && !consultationData.isSigned && canSign && (
                <Modal
                    show={showSign}
                    onHide={() => {
                        setShowSign(false);
                    }}
                    id="consultation-sign-up"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Zapisz się na konsultację</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Info
                                    data={{
                                        _id: consultationData._id,
                                        date: consultationData.date,
                                        time: consultationData.time,
                                        subjects: consultationData.subjects,
                                        teacher: consultationData.teacher,
                                    }}
                                />
                            </Col>
                            <Col>
                                <SigningForm
                                    scopes={consultationData.scopes}
                                    currentOption={currentOption}
                                    setCurrentOption={setCurrentOption}
                                    currentScope={currentScope}
                                    setCurrentScope={setCurrentScope}
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    {!hideButton && (
                        <Modal.Footer>
                            <Button
                                className="btn-modal btn-cancel"
                                variant="none"
                                onClick={() => {
                                    setShowSign(false);
                                    setShow(true);
                                }}
                            >
                                <Icon icon="mdi:arrow-u-left-top" />
                                <span className="btn-text">Wróć</span>
                            </Button>

                            {/* <Button
                                className="btn-modal"
                                disabled={signButtonDisabled}
                                variant="none"
                                onClick={submitForm}
                            >
                                <Icon icon="mdi:pen" />
                                <span className="btn-text">Zapisz się</span>
                            </Button> */}
                        </Modal.Footer>
                    )}
                </Modal>
            )}
        </>
    );
}

export function Title({ text, icon }: { text: string; icon?: string }) {
    return (
        <span className="title">
            {icon && <Icon icon={icon} />}
            {text}
        </span>
    );
}
