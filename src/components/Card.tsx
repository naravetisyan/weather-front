import React from 'react';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';
import { Col } from 'antd';
import { Temperature as TempObj } from '../types';
import Day from './Day';

interface Props {
    weatherCode: number,
    main: string,
    date: number,
    temperature: TempObj,
}

const Card: React.FC<Props> = ({ weatherCode, date, temperature, main }) => {
    return (
        <Col 
            style={{
                background: '#e3f7fb',
                padding: '8px 0',
                textAlign: 'center',
                borderRadius: 10,
                color: '#4582c7'
            }}
            span={4}
        >
            <WeatherIcon code={weatherCode}/>
            <h2 style={{color: '#585858'}}>{main}</h2>
            <Day date={date} type="weekday"/>
            <Day date={date} />
            <Temperature temperature={temperature}/>
        </Col>
    )
}

export default Card;
