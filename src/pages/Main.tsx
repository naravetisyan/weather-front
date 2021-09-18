import React, { useState, useEffect, useMemo } from 'react';
import { Forecast as FResp } from '../types';
import { fetchWeatherData } from '../api/weather';
import Cards from '../components/Cards';
import Form from '../components/Form';

const Forecast: React.FC = () => {
    let [city, setCity] = useState('Yerevan');
    let [forecast, setForecast] = useState<FResp[]>([]);
    let [loading, setLoading] = useState(false);

    
    useEffect(() => {
        fetchForecast(city)
    }, [city]);

    const fetchForecast = async (city: string): Promise<FResp[]> => {
        setLoading(true);
        const data = await fetchWeatherData(city);
        const list = (data.list || []).map((x: any) => ({
            date: x.dt,
            weather: x.weather,
            temperature: {
                minTemp: x.temp.min,
                maxTemp: x.temp.max,
            },
            main: x.weather[0].main
        }));
        setForecast(list);
        setLoading(false);
        return data.list;
    }

    const handleCityChange = (value: string) => {
        setCity(value);
    }

    const memoExample = useMemo((): Promise<string> => {
        const promise: Promise<string> = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(city);
            }, 2000);
        });
        return promise;
    }, [ city ]);
    console.log(memoExample);

    return (
        <>
            <Form
                city={city}
                onSearch={handleCityChange}
            />
            <Cards 
                forecast={forecast}
                isLoading={loading}
            />
        </>
    );
}

export default Forecast;