import React from 'react';
import { Row } from 'antd';
import Loading from './Loading';
import { Forecast } from '../types';
import Card from './Card';

interface Props {
    forecast: Forecast[],
    isLoading: boolean,
}

const Cards: React.FC<Props> = ({ forecast, isLoading }) => {
    return (
        <>
            {
                isLoading ?
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Loading  />
                </div> :
                <Row justify="space-around">
                {
                    forecast?.length ? forecast.map((f, i) => {
                        return (
                            <Card
                                key={i}
                                weatherCode={f.weather[0].id}
                                main={f.main}
                                date={f.date}
                                temperature={f.temperature}
                            />
                        )
                    })
                    :
                    <p>
                       There are no data to show 
                    </p>
                }
            </Row>
            }
        </>
    );
}

export default React.memo(Cards, (prevProps: Props, nextProps: Props): boolean => {
    return prevProps.forecast === nextProps.forecast &&
           prevProps.isLoading === nextProps.isLoading;
});
