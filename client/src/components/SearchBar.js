import React from "react";
import styled from "styled-components";

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

    // @media (max-width: 370px) {
    //     width: 30rem;
    // }

    // @media (max-width: 310px) {
    //     width: 25rem;
    // }
`;

export const SearchBar = ({ value, onChange }) => {
    return (
        <SearchInput
            type="search"
            value={value}
            placeholder="Search name or activity..."
            onChange={onChange}
        />
    );
};