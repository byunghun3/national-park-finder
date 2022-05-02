import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const ActivityFilter = ({ value, onChange }) => {
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
                    "@media (max-width: 370px)": {
                        width: "30rem"
                    },
                    "@media (max-width: 310px)": {
                        width: "25rem"
                    }
                }}
            >
                <InputLabel
                    sx={{
                        fontFamily: "Prompt",
                        fontSize: "1.5rem",
                        color: "black"
                    }}
                >
                    Activities
                </InputLabel>
                <Select
                    value={value}
                    label="activities"
                    onChange={onChange}
                    sx={{
                        textAlign: "left",
                        width: "100%",
                        backgroundColor: "white",
                        fontSize: "1.5rem"
                    }}
                >
                    <MenuItem value="" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Select an Activity</MenuItem>
                    <MenuItem value="Arts and Culture" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Arts & Culture</MenuItem>
                    <MenuItem value="Auto and ATV" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Auto & ATV</MenuItem>
                    <MenuItem value="Biking" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Biking</MenuItem>
                    <MenuItem value="Birdwatching" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Birdwatching</MenuItem>
                    <MenuItem value="Boating" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Boating</MenuItem>
                    <MenuItem value="Camping" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Camping</MenuItem>
                    <MenuItem value="Canoeing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Canoeing</MenuItem>
                    <MenuItem value="Caving" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Caving</MenuItem>
                    <MenuItem value="Climbing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Climbing</MenuItem>
                    <MenuItem value="ross-Country Skiing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Cross-Country Skiing</MenuItem>
                    <MenuItem value="Fishing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Fishing</MenuItem>
                    <MenuItem value="Fly Fishing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Fly Fishing</MenuItem>
                    <MenuItem value="Foraging" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Foraging</MenuItem>
                    <MenuItem value="Geocaching" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Geocaching</MenuItem>
                    <MenuItem value="Hiking" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Hiking</MenuItem>
                    <MenuItem value="Histor" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Historical</MenuItem>
                    <MenuItem value="Horseback Riding" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Horseback Riding</MenuItem>
                    <MenuItem value="Hunting" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Hunting</MenuItem>
                    <MenuItem value="Junior Ranger Program" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Junior Ranger Program</MenuItem>
                    <MenuItem value="Kayaking" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Kayaking</MenuItem>
                    <MenuItem value="Museum Exhibits" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Museum Exhibits</MenuItem>
                    <MenuItem value="Off-Roading" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Off-Roading</MenuItem>
                    <MenuItem value="Picnicking" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Picnicking</MenuItem>
                    <MenuItem value="Scenic Drive" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Scenic Drive</MenuItem>
                    <MenuItem value="Shopping" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Shopping</MenuItem>
                    <MenuItem value="Skiing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Skiing</MenuItem>
                    <MenuItem value="Stargazing" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Stargazing</MenuItem>
                    <MenuItem value="Swimming" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Swimming</MenuItem>
                    <MenuItem value="Tours" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Tours</MenuItem>
                    <MenuItem value="Water" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Water Activities</MenuItem>
                    <MenuItem value="Whitewater Rafting" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Whitewater Rafting</MenuItem>
                    <MenuItem value="Wildlife Watching" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Wildlife Watching</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};