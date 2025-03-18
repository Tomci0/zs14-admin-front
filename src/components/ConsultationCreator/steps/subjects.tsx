import { useEffect, useState } from 'react';

import Step from '../Step';

import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';
import getSubjects from '../../../api/getTeacherSubjects';
import useCreator from '../../../contexts/useCreator';

export default function Subjects() {
    const [alLSubjects, setAllSubjects] = useState<string[]>([]);

    const { subjects, setSubjects } = useCreator();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

    useEffect(() => {
        const api = async () => {
            const subjects = await getSubjects();

            setAllSubjects(subjects);
        };

        api();
    }, []);

    function handleClick(subject: string) {
        if (typeof subjects === 'undefined') {
            return;
        }

        if (subjects.includes(subject)) {
            setSubjects(subjects.filter((s) => s !== subject));
        } else {
            console.log('selected');
            setSubjects([...subjects, subject]);
            console.log(subjects);
        }
    }

    return (
        <Step>
            <div className="title">Przedmioty Konsultacji</div>

            <div className="content">
                <form className="step-form subjects-form">
                    <div className="subjects-list">
                        {alLSubjects.map((subject, i) => (
                            <div
                                key={i}
                                onClick={() => handleClick(subject)}
                                className={'subject ' + (subjects && subjects.includes(subject) && 'active')}
                            >
                                {subject}
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </Step>
    );
}
