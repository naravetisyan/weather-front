import React from 'react';

interface TemperatureProps {
    temperature: {
      minTemp: string,
      maxTemp: string,
    },
}

const Temperature: React.FC<TemperatureProps> = ({temperature: {minTemp, maxTemp}}) => <div>{maxTemp} °C / {minTemp}  °C</div>

export default Temperature;