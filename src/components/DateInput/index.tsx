import { AnyRecord } from 'dns';
import { useState, forwardRef, useEffect } from 'react';

import getSetting from '../../api/getSetting';

// import { Dropdown, Form } from 'react-bootstrap';

// import Calendar from 'react-calendar';

import DatePicker from 'react-date-picker';

import './Calendar.scss';
import './DatePicker.scss';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateInput() {
    const [value, onChange] = useState<Value>(new Date());
    const [endSchoolYear, setEndSchoolYear] = useState<Date>(new Date());

    useEffect(() => {
        getSetting('endSchoolYear').then((data: any) => {
            setEndSchoolYear(new Date(data.endSchoolYear));
        });
    }, []);

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    return (
        <div className="w-100">
            <DatePicker
                format="dd-MM-yyyy"
                className={'date-input'}
                onChange={onChange}
                value={value}
                minDate={minDate}
                maxDate={endSchoolYear}
            />
        </div>
    );
}
