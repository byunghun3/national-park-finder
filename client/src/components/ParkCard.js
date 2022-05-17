import React, { useState, useEffect, useRef } from "react";
import { StateConverter } from "../utils/StateConverter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Overlay = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: none;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 43.2rem;
    width: 37rem;
    border: solid darkslategrey;

    @media (max-width: 499px) {
        width: 90vw;
    }
`;

const Img = styled.img` 
    object-fit: cover;
    object-position: 50% 25%;    
    height: 25rem;
    width: 37rem;

    @media (max-width: 499px) {
        width: 90vw;
    }
`;

const ParkInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 12.5rem;
    font-size: 1.7rem;
`;

const ParkName = styled.div`
    flex: 33.33%;  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    margin-top: 1%;
    font-size: 2rem;
    font-weight: 700;
`;

const ParkState = styled.div`
    flex: 33.33%;  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
`;

const StateNames = styled.div`
    display: flex;
`;

const ParkType = styled.div`
    flex: 33.33%;  
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.4rem;
    width: 100%;
    margin-top: 1%;
`;

const DetailsButton = styled.button`
    margin-right: 1rem;
    padding: 1.5%;
    background-color: mediumblue;
    color: white;
    font-family: "Prompt";
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
`;

const FavButton = styled.button`
    position: relative;
    margin-left: 1rem;
    border: none;
    background: none;
    cursor: pointer;
`;

const savedHeart = keyframes`
    0% { top: 0; display: flex; opacity: 0; }
    50% { top: -60%; display: flex; opacity: 1; visiblity: visible;}
    90% { top: -100%; display: flex; opacity: 0; visibility: hidden;}
`;

const HeartAnimation = styled.div`
    position: absolute;
    top: 0;
    left: -40%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    opacity: 0;
    font-family: "Prompt";
    font-size: 2rem;    
    animation: ${savedHeart} 1s steps(12, end) forwards;
`;

const ReminderAnimation = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    color: black;
    opacity: 0;
    font-family: "Prompt";
    font-size: 2rem;
    animation: ${savedHeart} 1s steps(12, end) forwards;
`;

const DetailsCard = styled.div`
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60rem;
    width: 60rem;
    border: solid black;
    background: white;
    overflow-y: scroll;

    @media (max-width: 499px) {
        height: 90vh;
        width: 90vw;
    }
`;

const DetailsImg = styled.img`
    object-fit: cover;
    object-position: 50% 25%;    
    height: 60rem;
    width: 60rem;

    @media (max-width: 499px) {
        width: 90vw;
    }
`;

const DetailsParkInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 92%;
    font-size: 1.7rem;
`;

const DetailsParkName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2% 0 1.5% 0;
    font-size: 2rem;
    font-weight: 700;
`;

const DetailsParkState = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 1.5% 0;
    overflow-wrap: break-word;
`;

const DetailsParkType = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5% 0;
`;

const ParkDesc = styled.div`
    margin: 2% 0;
    text-align: justify;
    text-justify: inter-character;
`;

const ParkURL = styled.a`
    margin: 2% 0 4% 0;
    color: darkslategrey;
    text-decoration: none;
    font-family: "Prompt";
    font-size: 2rem;
    font-weight: 700;

    &:hover {
        color: maroon;
    }
`;

const ExpandButton = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: maroon;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
`;

const ExpandedContent = styled.div`
    display: ${props => props.isExpanded ? "flex" : "none"};
    flex-wrap: wrap;
    text-align: justify;
    text-justify: inter-character;
    width: 100%;
    margin: 1.5% 0 2.5% 0;
`;

const CloseButton = styled.button`
    margin: 5% 0 3% 0;
    outline: black;
    background-color: white;
    font-family: "Prompt";
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export const ParkCard = ({ id, img, fullName, states, designation, description, activities, hours,
    url, weatherInfo }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const [showDetails, setShowDetails] = useState(false);
    const [saved, setSaved] = useState(false);
    const [heartAnimation, setHeartAnimation] = useState(false);
    const [loginReminder, setLoginReminder] = useState(false);
    const [expandedActivities, setExpandedActivities] = useState(false);
    const [expandedHours, setExpandedHours] = useState(false);
    const [expandedWeather, setExpandedWeather] = useState(false);

    const modalRef = useRef();

    useEffect(() => {
        if (loggedInUser && loggedInUser.user.parkId.find(parkId => parkId === id)) {
            setSaved(true);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowDetails(false);
                document.body.style.overflow = "visible";
                document.getElementById("overlay").style.display = "none";
            }
        };

        if (!showDetails) {
            document.body.style.overflow = "visible";
            document.getElementById("overlay").style.display = "none";
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleShowDetails = () => {
        setShowDetails(true);
        document.body.style.overflow = "hidden";
        document.getElementById("overlay").style.display = "block";
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        document.body.style.overflow = "visible";
        document.getElementById("overlay").style.display = "none";
    };

    const handleChangeHeart = () => {
        if (!loggedInUser) {
            setLoginReminder(true);

            setTimeout(() => {
                setLoginReminder(false);
            }, 1001);
        } else if (saved) {
            setSaved(false);
            setHeartAnimation(false);
        } else if (!saved) {
            setSaved(true);
            setHeartAnimation(true);

            setTimeout(() => {
                setHeartAnimation(false);
            }, 1001);
        }
    };

    const stateName = states.split(",");

    return (
        <div>
            <Overlay id="overlay" />
            <Card>
                <Img src={img} alt="" />
                <ParkInfo>
                    <ParkName>{fullName}</ParkName>
                    <ParkState>
                        {stateName.slice(0, 3).map((state, i) => {
                            return <StateNames key={i}>
                                <StateConverter stateCode={state} />{i === stateName.slice(0, 3).length - 1 ? "" : <div>,&nbsp;</div>}
                            </StateNames>;
                        })}
                        {stateName.length > 3 ?
                            <div>...</div> : null}
                    </ParkState>
                    <ParkType>{designation}</ParkType>
                </ParkInfo>
                <ButtonContainer>
                    <DetailsButton type="button" onClick={handleShowDetails}>Details</DetailsButton>
                    {saved ?
                        <FavButton type="submit">
                            {heartAnimation && <HeartAnimation>+saved!</HeartAnimation>}
                            <FavoriteIcon
                                sx={{
                                    marginTop: "0.3rem",
                                    color: "red",
                                    fontSize: "3rem"
                                }}
                                onClick={handleChangeHeart}
                            />
                        </FavButton> :
                        <FavButton type="submit">
                            {loginReminder && <ReminderAnimation>Please login&nbsp;<InsertEmoticonIcon /></ReminderAnimation>}
                            <FavoriteBorderOutlinedIcon
                                sx={{
                                    marginTop: "0.3rem",
                                    color: "black",
                                    fontSize: "3rem",
                                }}
                                onClick={handleChangeHeart}
                            />
                        </FavButton>
                    }
                </ButtonContainer>
            </Card>
            {showDetails &&
                <DetailsCard ref={modalRef}>
                    <DetailsImg src={img} alt="" />
                    <DetailsParkInfo>
                        <DetailsParkName>{fullName}</DetailsParkName>
                        <DetailsParkState>
                            {stateName.map((state, i) => {
                                return <StateNames key={i}>
                                    <StateConverter stateCode={state} />{i === stateName.length - 1 ? "" : <div>,&nbsp;</div>}
                                </StateNames>;
                            })}
                        </DetailsParkState>
                        <DetailsParkType>{designation}</DetailsParkType>
                        <ParkDesc>{description}</ParkDesc>
                        <ParkURL href={url} target="_blank" rel="noopener noreferrer">Visit Site</ParkURL>
                        <ExpandButton type="button" onClick={() => { setExpandedActivities(!expandedActivities); }}>
                            See Activities
                        </ExpandButton>
                        <ExpandedContent isExpanded={expandedActivities}>
                            {activities}
                        </ExpandedContent>
                        <ExpandButton type="button" onClick={() => { setExpandedHours(!expandedHours); }}>
                            See Hours
                        </ExpandButton>
                        <ExpandedContent isExpanded={expandedHours}>
                            {hours}
                        </ExpandedContent>
                        <ExpandButton type="button" onClick={() => { setExpandedWeather(!expandedWeather); }}>
                            See Weather Info
                        </ExpandButton >
                        <ExpandedContent isExpanded={expandedWeather}>
                            {weatherInfo}
                        </ExpandedContent>
                    </DetailsParkInfo>
                    <CloseButton type="button" onClick={handleCloseDetails}>Close</CloseButton>
                </DetailsCard >
            }
        </div >
    );
};