import { AnyRecord } from 'dns';
import { useState, forwardRef, useEffect } from 'react';

import getSetting from '../../api/getSetting';

// import { Dropdown, Form } from 'react-bootstrap';

// import Calendar from 'react-calendar';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import './DatePicker.scss';

import DatePicker from 'react-date-picker';

import './Calendar.scss';
import './DatePicker.scss';
import useCreator from '../../contexts/useCreator';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateInput({ value, setValue }: { value: Date; setValue: (value: Date) => void }) {
    const [endSchoolYear, setEndSchoolYear] = useState<Date>(new Date());
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

    console.log(value);

    getSetting('endSchoolYear').then((data: any) => {
        setEndSchoolYear(new Date(data.endSchoolYear));
    });

    function handleDateChange(e: any) {
        setValue(e);
    }

    return (
        <div className="w-100">
            <DatePicker
                format="dd-MM-yyyy"
                className={'date-input'}
                onChange={handleDateChange}
                value={value}
                minDate={minDate}
                maxDate={endSchoolYear}
            />
        </div>
    );
}
