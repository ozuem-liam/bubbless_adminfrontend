import { Input } from 'antd'
import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { SearchOutlined } from '@material-ui/icons';
import styled from 'styled-components';




function SearchField({placeholder, value, handleChange}) {
    return (
        <InputField
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
    )
}

export default SearchField

const InputField = styled(Input)`
    padding: 10px;
    width: 100%;
    border-radius: 10px;
`