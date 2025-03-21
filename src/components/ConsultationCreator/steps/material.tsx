import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Step from '../Step';
import { Form, Row, Col } from 'react-bootstrap';
import MarkdownEditor from '../../MarkdownEditor';

import MaterialSelector from '../../MaterialSelector';
import useCreator from '../../../contexts/useCreator';

export default function Material() {
    const { description, setDescription } = useCreator();
    return (
        <Step>
            <div className="title">Zakres Konsultacji</div>
            <div className="content">
                <Row>
                    <Col>
                        <Form.Label>Opis Konsultacji</Form.Label>
                        <MarkdownEditor value={description as string} setValue={setDescription} />
                    </Col>
                    <Col>
                        <Form.Label>Zakres Konsultacji</Form.Label>
                        <MaterialSelector />
                    </Col>
                </Row>
            </div>
        </Step>
    );
}
