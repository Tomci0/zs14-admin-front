import { AnyRecord } from 'dns';
import { useState, forwardRef, useEffect } from 'react';

import getSetting from '../../api/getSetting';

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import './DatePicker.scss';

import DatePicker, { DateRangePicker } from '@wojtekmaj/react-daterange-picker';

import './Calendar.scss';
import './DatePicker.scss';
import useCreator from '../../contexts/useCreator';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DateInput() {
    // const [endSchoolYear, setEndSchoolYear] = useState<Date>(new Date());
    // // const { consultationInterval, setConsultationInterval } = useCreator();
    // useEffect(() => {
    //     getSetting('endSchoolYear').then((data: any) => {
    //         setEndSchoolYear(new Date(data.endSchoolYear));
    //     });
    // }, []);
    // function handleDateChange(e: any) {
    //     setConsultationInterval(e);
    // }
    // const minDate = new Date();
    // minDate.setDate(minDate.getDate() + 1);
    // return (
    //     <div className="w-100">
    //         <DateRangePicker
    //             onChange={handleDateChange}
    //             value={consultationInterval as Value}
    //             minDate={new Date()}
    //             maxDate={endSchoolYear}
    //             className={'date-input'}
    //         />
    //     </div>
    // );

    return <div className="w-100">asd</div>;
}
