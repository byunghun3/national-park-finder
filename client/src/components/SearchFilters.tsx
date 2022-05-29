import React, { FC } from "react";
import { SelectChangeEvent } from "@mui/material";
import { ActivityFilter } from "./ActivityFilter";
import { TypeFilter } from "./TypeFilter";
import { StateFilter } from "./StateFilter";
import { SearchBar } from "./SearchBar";
import styled from "styled-components";

interface SearchFiltersProps {
    searchValue: string;
    onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
    stateValue: string;
    onChangeState: (e: SelectChangeEvent<string>, child: React.ReactNode) => void;
    typeValue: string;
    onChangeType: (e: SelectChangeEvent<string>, child: React.ReactNode) => void;
    activityValue: string;
    onChangeActivity: (e: SelectChangeEvent<string>, child: React.ReactNode) => void;
    handleFilterBySavedParks: React.ChangeEventHandler<HTMLInputElement>;
}

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 94%;
    padding: 2% 0;
    font-family: "Prompt";
`;

const Flex = styled.div`
    @media (max-width: 950px) {
        flex: 50%;
    }

    @media (max-width: 775px) {
        flex: 90%;
    }
`;

const Checkbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1.7rem;

    @media (max-width: 950px) {
        margin: 3% 0 1.5% 0; 
    }

    @media (max-width: 900px) {
        margin: 1.5% 5% 2% 5%; 
    }

    @media (max-width: 775px) {
        margin: 0 5% 2% 5%; 
    }
`;

const SavedFilter = styled.input`
    height: 1.7rem;
    width: 1.7rem;
`;


export const SearchFilters: FC<SearchFiltersProps> = ({ searchValue, onChangeSearch, stateValue, onChangeState,
    typeValue, onChangeType, activityValue, onChangeActivity, handleFilterBySavedParks }) => {
    return (
        <FilterContainer>
            <Flex>
                <ActivityFilter
                    value={activityValue}
                    onChange={onChangeActivity}
                />
            </Flex>
            <Flex>
                <StateFilter
                    value={stateValue}
                    onChange={onChangeState}
                />
            </Flex>
            <Flex>
                <SearchBar
                    value={searchValue}
                    onChange={onChangeSearch}
                />
            </Flex>
            <Flex>
                <TypeFilter
                    value={typeValue}
                    onChange={onChangeType}
                />
            </Flex>
            <Checkbox>
                <SavedFilter type="checkbox" onClick={handleFilterBySavedParks} /> Saved
            </Checkbox>
        </FilterContainer>
    );
};