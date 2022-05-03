import React, { useState } from "react";
import styled from "styled-components";

const PageNumbers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vh 0 4vh 0;

    @media (max-width: 775px) {
        margin-top: 4vh;
    }
`;

const Number = styled.div`
    display: flex;
    margin: 0 0.5rem;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;
`;

const BoldNumber = styled.div`
    display: flex;
    margin: 0 0.5rem;
    color: brown;
    font-family: "Prompt";
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
`;

const PageButton = styled.button`
    padding: 1.5%;
    margin: 0 3%;
    background-color: white;
    font-family: "Prompt";
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const Pagination = ({ parksPerPage, totalParks, handleChangePage, currentPage }) => {
    const [minPageNumber, setMinPageNumber] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState(10);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalParks / parksPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleShowMorePages = () => {
        if (maxPageNumber !== pageNumbers.length) {
            setMinPageNumber(prev => prev + 10);
            setMaxPageNumber(prev => prev + 10);
        }
    };

    const handleShowPrevPages = () => {
        if (minPageNumber !== 0) {
            setMinPageNumber(prev => prev - 10);
            setMaxPageNumber(prev => prev - 10);
        }
    };

    const pages = pageNumbers.map((number, i) => {
        if (number >= minPageNumber && number <= maxPageNumber) {
            if (currentPage === (i + 1)) {
                return <BoldNumber key={number} onClick={() => { handleChangePage(number); }}>
                    {number}
                </BoldNumber>;
            } else {
                return <Number key={number} onClick={() => { handleChangePage(number); }}>
                    {number}
                </Number>;
            }
        }
    });

    return (
        <PageNumbers>
            {maxPageNumber > 10 &&
                <PageButton onClick={handleShowPrevPages}>
                    Previous
                </PageButton>
            }
            {pages}
            {pageNumbers.length > maxPageNumber &&
                <PageButton onClick={handleShowMorePages}>
                    Next
                </PageButton>
            }
        </PageNumbers >
    );
};