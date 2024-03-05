"use client"
import { Input } from '@/components/shared/Input/Input';
import React, { useState } from 'react';

const SearchInput = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <label
                className='text-black absolute top-2 left-0 cursor-text transition-all duration-200'
                htmlFor="searchInput"
                style={{ top: isFocused ? '0' : '2rem' }}
            >
                Where to look?
            </label>
            <Input
                className='w-full border-x-0 border-t-0 rounded-none border-b px-0 focus:border-primaryCol'
                type='text'
                id='searchInput'
                placeholder=''
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </>
    );
};

export default SearchInput;