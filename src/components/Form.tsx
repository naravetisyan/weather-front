import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

interface Prop {
    city: string,
    onSearch: (value: string) => void,
};

const Form: React.FC<Prop> = ({ city, onSearch }) => {
    return (
        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100
            }}>
            <Search
                placeholder="Search by city"
                defaultValue={city}
                enterButton
                allowClear
                onSearch={onSearch}
                style={{ width: 400 }}
            />
        </div>
    )
}

export default Form;