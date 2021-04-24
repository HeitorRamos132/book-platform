import React from 'react'
import Input from '../../atoms/Input/Input'

const SearchInput: React.FC = () => {
    return (
        <div>
            <img src='./images/searchIcon.svg' alt='Lupa' />
            <Input/>
        </div>
    )
}

export default SearchInput