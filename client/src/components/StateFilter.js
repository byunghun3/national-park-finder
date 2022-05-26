import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const StateFilter = ({ value, onChange }) => {
    return (
        <div>
            <FormControl
                sx={{
                    width: "20rem",
                    margin: "1.5% 0",
                    "@media (max-width: 950px)": {
                        margin: "3% 0 5% 0",
                        width: "35rem"
                    },
                    "@media (max-width: 775px)": {
                        width: "70%",
                        marginTop: "1.5%"
                    },
                    "@media (max-width: 499px)": {
                        width: "85%"
                    }
                }}
            >
                <InputLabel
                    sx={{
                        fontFamily: "Prompt",
                        fontSize: "1.5rem",
                        color: "black"
                    }}
                >State</InputLabel>
                <Select
                    value={value}
                    label="state"
                    onChange={onChange}
                    sx={{
                        textAlign: "left",
                        width: "100%",
                        backgroundColor: "white",
                        fontSize: "1.5rem"
                    }}
                >
                    <MenuItem value="" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>-- Select a State --</MenuItem>
                    <MenuItem value="AL" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Alabama</MenuItem>
                    <MenuItem value="AK" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Alaska</MenuItem>
                    <MenuItem value="AZ" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Arizona</MenuItem>
                    <MenuItem value="AR" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Arkansas</MenuItem>
                    <MenuItem value="CA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>California</MenuItem>
                    <MenuItem value="CO" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Colorado</MenuItem>
                    <MenuItem value="CT" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Connecticut</MenuItem>
                    <MenuItem value="DE" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Delaware</MenuItem>
                    <MenuItem value="DC" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>District Of Columbia</MenuItem>
                    <MenuItem value="FL" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Florida</MenuItem>
                    <MenuItem value="GA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Georgia</MenuItem>
                    <MenuItem value="HI" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Hawaii</MenuItem>
                    <MenuItem value="ID" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Idaho</MenuItem>
                    <MenuItem value="IL" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Illinois</MenuItem>
                    <MenuItem value="IN" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Indiana</MenuItem>
                    <MenuItem value="IA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Iowa</MenuItem>
                    <MenuItem value="KS" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Kansas</MenuItem>
                    <MenuItem value="KY" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Kentucky</MenuItem>
                    <MenuItem value="LA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Louisiana</MenuItem>
                    <MenuItem value="ME" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Maine</MenuItem>
                    <MenuItem value="MD" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Maryland</MenuItem>
                    <MenuItem value="MA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Massachusetts</MenuItem>
                    <MenuItem value="MI" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Michigan</MenuItem>
                    <MenuItem value="MN" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Minnesota</MenuItem>
                    <MenuItem value="MS" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Mississippi</MenuItem>
                    <MenuItem value="MO" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Missouri</MenuItem>
                    <MenuItem value="MT" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Montana</MenuItem>
                    <MenuItem value="NE" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Nebraska</MenuItem>
                    <MenuItem value="NV" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Nevada</MenuItem>
                    <MenuItem value="NH" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>New Hampshire</MenuItem>
                    <MenuItem value="NJ" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>New Jersey</MenuItem>
                    <MenuItem value="NM" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>New Mexico</MenuItem>
                    <MenuItem value="NY" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>New York</MenuItem>
                    <MenuItem value="NC" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>North Carolina</MenuItem>
                    <MenuItem value="ND" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>North Dakota</MenuItem>
                    <MenuItem value="OH" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Ohio</MenuItem>
                    <MenuItem value="OK" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Oklahoma</MenuItem>
                    <MenuItem value="OR" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Oregon</MenuItem>
                    <MenuItem value="PA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Pennsylvania</MenuItem>
                    <MenuItem value="RI" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Rhode Island</MenuItem>
                    <MenuItem value="SC" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>South Carolina</MenuItem>
                    <MenuItem value="SD" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>South Dakota</MenuItem>
                    <MenuItem value="TN" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Tennessee</MenuItem>
                    <MenuItem value="TX" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Texas</MenuItem>
                    <MenuItem value="UT" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Utah</MenuItem>
                    <MenuItem value="VT" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Vermont</MenuItem>
                    <MenuItem value="VA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Virginia</MenuItem>
                    <MenuItem value="WA" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Washington</MenuItem>
                    <MenuItem value="WV" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>West Virginia</MenuItem>
                    <MenuItem value="WI" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Wisconsin</MenuItem>
                    <MenuItem value="WY" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Wyoming</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};