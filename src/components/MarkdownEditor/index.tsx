import React, { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './style.scss';
import useConsultations from '../../contexts/useConsultations';
import useCreator from '../../contexts/useCreator';

export default function MarkdownEditor({ value, setValue }: { value: string; setValue: (value: string) => void }) {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Upewnij się, że edytor jest gotowy do pisania z pustym divem
        if (editorRef.current) {
            if (!editorRef.current.innerHTML.trim()) {
                editorRef.current.innerHTML = value;
            }

            // Ustaw focus na edytorze
            editorRef.current.focus();
        }

        // Ustaw div jako separator paragrafów, jeśli przeglądarka obsługuje tę funkcję
        try {
            document.execCommand('defaultParagraphSeparator', false, 'div');
        } catch (e) {
            console.warn('Przeglądarka nie obsługuje defaultParagraphSeparator', e);
        }
    }, []);

    // Prosta funkcja do wykonywania poleceń
    const execCommand = (command: string, value: string = '') => {
        document.execCommand(command, false, value);

        // Przywróć focus na edytor po kliknięciu przycisku
        if (editorRef.current) {
            editorRef.current.focus();
        }
    };

    return (
        <div className="markdown-editor">
            <div className="controls">
                {/* Podstawowe formatowanie */}
                <button className="control" onClick={() => execCommand('bold')}>
                    <Icon icon="mdi:format-bold" />
                </button>
                <button className="control" onClick={() => execCommand('italic')}>
                    <Icon icon="mdi:format-italic" />
                </button>
                <button className="control" onClick={() => execCommand('underline')}>
                    <Icon icon="mdi:format-underline" />
                </button>

                {/* Listy */}
                <button className="control" onClick={() => execCommand('insertUnorderedList')}>
                    <Icon icon="mdi:format-list-bulleted" />
                </button>
                <button className="control" onClick={() => execCommand('insertOrderedList')}>
                    <Icon icon="mdi:format-list-numbered" />
                </button>
            </div>

            <div
                className="editor"
                contentEditable={true}
                ref={editorRef}
                onInput={(e) => setValue(e.currentTarget.innerHTML)}
                spellCheck={false}
                onFocus={(e) => {
                    if (!e.currentTarget.innerHTML.trim()) {
                        e.currentTarget.innerHTML = '<div><br></div>';
                    }
                }}
            ></div>
        </div>
    );
}
