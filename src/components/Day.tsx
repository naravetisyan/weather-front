import React from 'react';
import moment from 'moment';

interface DateProp {
    date: number,
    type?: string,
}

const Day: React.FC<DateProp> = ({ date, type }) => {
    const dt = type === 'weekday' ?
        moment(new Date(+(date+'000'))).format('MM/DD/YYYY') :
        moment(new Date(+(date+'000'))).format('dddd');
    return <div>{dt}</div>;
};

export default Day;
