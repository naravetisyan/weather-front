export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string,
}

export interface Temperature {
    minTemp: string,
    maxTemp: string,
}

export interface Forecast {
    date: number,
    weekDay: string,
    main: string,
    weather: Weather[],
    temperature: Temperature,
}