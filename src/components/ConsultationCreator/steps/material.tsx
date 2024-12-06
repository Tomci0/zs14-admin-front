import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Step from '../Step';
import { Form } from 'react-bootstrap';

export default function Material() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    return (
        <Step>
            <div className="title">Zakres Konsultacji</div>
            <div className="content">
                <div className="description">
                    <Form.Label>Opis Konsultacji</Form.Label>
                    <div>
                        <button onClick={onBoldClick}>Bold</button>
                        <Editor editorState={editorState} onChange={setEditorState} />
                    </div>
                </div>
            </div>
        </Step>
    );
}
