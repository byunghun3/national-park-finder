import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const TypeFilter = ({ value, onChange }) => {
  return (
    <FormControl
      sx={{
        width: "20rem",
        margin: "1.5% 0",
        "@media (max-width: 950px)": {
          width: "35rem"
        },
        "@media (max-width: 775px)": {
          width: "70%",
          marginBottom: "5%"
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
      >
        Type
      </InputLabel>
      <Select
        value={value}
        label="type"
        onChange={onChange}
        sx={{
          textAlign: "left",
          width: "100%",
          backgroundColor: "white",
          fontSize: "1.5rem"
        }}
      >
        <MenuItem value="" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>-- Select Park Type --</MenuItem>
        <MenuItem value="National Park" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Park</MenuItem>
        <MenuItem value="National Monument" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Monument</MenuItem>
        <MenuItem value="Preserve" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Preserve</MenuItem>
        <MenuItem value="National Historic Site" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Historic Site</MenuItem>
        <MenuItem value="National Historical Park" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Historical Park</MenuItem>
        <MenuItem value="Memorial" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Memorial</MenuItem>
        <MenuItem value="National Battlefield" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Battlefield</MenuItem>
        <MenuItem value="Recreation Area" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Recreation Area</MenuItem>
        <MenuItem value="National Seashore" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Seashore</MenuItem>
        <MenuItem value="Lakeshore" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Lakeshore</MenuItem>
        <MenuItem value="River" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National River</MenuItem>
        <MenuItem value="Parkway" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Parkway</MenuItem>
        <MenuItem value="Trail" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>National Trail</MenuItem>
        <MenuItem value="Affiliated Area" sx={{ fontFamily: "Prompt", fontSize: "1.5rem" }}>Affiliated Areas</MenuItem>
      </Select>
    </FormControl>
  );
};