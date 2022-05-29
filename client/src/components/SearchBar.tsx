import React, { FC } from "react";
import styled from "styled-components";

interface SearchBarProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = styled.input`
    height: 5.5rem;
    width: 20rem;
    padding-left: 1rem;
    margin: 1.5% 0;
    border: solid lightgray 1px;
    border-radius: 2%;
    font-family: "Prompt";
    font-size: 1.5rem;

    &::placeholder {
        color: black;
        font-family: "Prompt";
    }

    @media (max-width: 950px) {
        width: 35rem;
    }

    @media (max-width: 775px) {
        width: 70%;
        margin-bottom: 5%;
    }

    @media (max-width: 499px) {
        width: 85%;
    }
`;

export const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <SearchInput
            type="search"
            value={value}
            placeholder="Search name or activity..."
            onChange={onChange}
        />
    );
};