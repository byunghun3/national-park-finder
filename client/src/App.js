import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Login } from "./components/Login";
import { ParkCard } from "./components/ParkCard";
import { SearchFilters } from "./components/SearchFilters";
import { Pagination } from "./components/Pagination";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled, { keyframes } from "styled-components";
import "./App.css";

const API = {
  key: "NKmI0DYhskYfr2b0VtZJGUgjOwaubn9G3R1GlWPC",
  url: "https://developer.nps.gov/api/v1/parks?limit=466&api_key="
};

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 7vh;
  width: 99%;
`;

const Title = styled.div`
  display: flex;
  width: 70%;
  margin-left: 2%;
  color: #395547;
  font-family: "Noto Serif";
  font-size: 4rem;

  @media (max-width: 750px) {
    width: 90%;
    font-size: 3.8rem;
  }  

  @media (max-width: 575px) {
    font-size: 2.8rem;
  }  

  @media (max-width: 380px) {
    font-size: 2.3rem;
  }  

  @media (max-width: 310px) {
    font-size: 2rem;
  }  
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  height: 4rem;
  width: 30%;
  margin-right: 2%;

  @media (max-width: 750px) {
    width: 10%;
  }  
`;

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

const Greeting = styled.div`
  display: flex;
  align-items: center;
  height: 70%;
  font-family: "Prompt";
  font-size: 1.8rem;

  @media (max-width: 775px) {
    display: none;
  }
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 20vh;
  width: 100%;
  background-color: brown;
`;

const LoaderSection = styled.div`
  display: flex;
  flex: 6;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: auto;
`;

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Loader = styled.div`
  place-self: center;
  width: 0;
  overflow: hidden;
  margin-top: 10%;
  border-right: solid black 2pt;
  white-space: nowrap;
  font-family: "Prompt";
  font-size: 4rem;
  animation: ${typewriter} 1s steps(12, end) forwards;

  @media (max-width: 499px) {
    font-size: 2rem;
  }
`;

const ParkSection = styled.div`
  flex: 6;
`;

const ParkQtyText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  font-size: 1.8rem;
`;

const ParkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8rem;
  width: auto;
  margin: 2% 0 3.5% 0;

  @media (max-width: 1320px) {
    grid-gap: 4rem;
  }

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8rem;
  }

  @media (max-width: 875px) {
    grid-template-columns: 1fr;
  }
`;

const NoResults = styled.div`
  margin-top: 50%;
  font-family: "Prompt";
  font-size: 3rem;
`;

const ActivityNames = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ParkHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
`;

const ParkHoursDays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2% 0;
`;

const PageSection = styled.div`
  flex: 1;
`;

function App() {
  const [npsData, setNpsData] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [userExistsError, setUserExistsError] = useState(false);
  const [invalidUserError, setInvalidUserError] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [activityValue, setActivityValue] = useState("");
  const [isInputChecked, setIsInputChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [parksPerPage] = useState(18);

  const modalRef = useRef();

  const loaderText = [
    "Bringing your next travel destination...",
    "Such cool places in your state...",
    "Where to, this season?"
  ][Math.floor(Math.random() * 3)];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowLoginModal(false);
        document.body.style.overflow = "visible";
        document.getElementById("overlay").style.display = "none";
      }
    };

    if (!showLoginModal) {
      document.body.style.overflow = "visible";
      document.getElementById("overlay").style.display = "none";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      axios.get(`http://localhost:8000/users/${loggedInUser.user._id}`, {
        headers: {
          "authorization": "Bearer " + loggedInUser.accessToken
        }
      });
    }
    setName("");
  }, [loggedInUser]);

  const handleOpenModal = () => {
    setShowLoginModal(true);
    document.body.style.overflow = "hidden";
    document.getElementById("overlay").style.display = "block";
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    document.body.style.overflow = "visible";
    document.getElementById("overlay").style.display = "none";
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setPasswordLengthError(false);
    setUserExistsError(false);

    axios.post("http://localhost:8000/users/signup", {
      name: name,
      username: username,
      password: password
    }).then((res) => {
      setName("");
      setUsername("");
      setPassword("");
      setShowSignUp(false);
      document.getElementById("overlay").style.display = "none";
    }).catch((err) => {
      if (err.response.data === "User already exists") {
        setUserExistsError(true);
      } else if (err.response.data === "Password must be at least 6 characters") {
        setPasswordLengthError(true);
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setInvalidUserError(false);

    axios.post("http://localhost:8000/users/login", {
      username: username,
      password: password
    }).then((res) => {
      setLoggedInUser(res.data);
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      setName("");
      setUsername("");
      setPassword("");
      setShowLoginModal(false);
      document.body.style.overflow = "visible";
      document.getElementById("overlay").style.display = "none";
    }).catch((err) => {
      if (err.response.data === "Invalid username or password") {
        setInvalidUserError(true);
      }
    });
  };

  const handleLogOut = (e) => {
    console.log("logout");

    axios.delete("http://localhost:8000/users/login", {
      headers: {
        "authorization": "Bearer " + loggedInUser.accessToken
      },
      username: loggedInUser.user.username
    }).then((res) => {
      console.log("deleted");
      localStorage.removeItem("loggedInUser");
      setName("");
      setUsername("");
      setPassword("");
      setShowLoginModal(false);
      document.body.style.overflow = "visible";
      document.getElementById("overlay").style.display = "none";
    });
  };

  const handleSearchByName = (e) => {
    setSearchValue(e.target.value);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1);

    axios.get(`${API.url}${API.key}`)
      .then(res => {
        setNpsData(res.data.data);
      });
  };

  const handleFilterByState = (e) => {
    setStateValue(e.target.value);
    setIsLoading(true);

    axios.get(`${API.url}${API.key}`)
      .then(res => {
        setTimeout(() => {
          setNpsData(res.data.data);
          setIsLoading(false);
        }, 3000);
      });
  };

  const handleFilterByType = (e) => {
    setTypeValue(e.target.value);
    setIsLoading(true);

    axios.get(`${API.url}${API.key}`)
      .then(res => {
        setTimeout(() => {
          setNpsData(res.data.data);
          setIsLoading(false);
        }, 3000);
      });
  };

  const handleFilterByActivity = (e) => {
    setActivityValue(e.target.value);
    setIsLoading(true);

    axios.get(`${API.url}${API.key}`)
      .then(res => {
        setTimeout(() => {
          setNpsData(res.data.data);
          setIsLoading(false);
        }, 3000);
      });
  };

  const handleFilterBySavedParks = (e) => {
    if (loggedInUser) {
      setIsInputChecked(!isInputChecked);
      setIsLoading(true);

      axios.get(`${API.url}${API.key}`)
        .then(res => {
          setTimeout(() => {
            setNpsData(res.data.data);
            setIsLoading(false);
          }, 3000);
        });
    } else if (!loggedInUser) {
      return null;
    }
  };

  const handleSavePark = (e, id) => {
    e.preventDefault();

    const park = npsData.find(park => {
      return park.id === id;
    });

    if (loggedInUser) {
      axios.patch(`http://localhost:8000/users/${loggedInUser.user._id}/${park.id}`, {
        parkId: park.id
      }, {
        headers: {
          "authorization": "Bearer " + loggedInUser.accessToken
        }
      }).then(res => {
        if (!loggedInUser.user.parkId.some(parkId => parkId.includes(park.id))) {
          const parkIdCopy = [...loggedInUser.user.parkId];
          const newUser = {
            ...loggedInUser, user: {
              name: loggedInUser.user.name,
              password: loggedInUser.user.password,
              username: loggedInUser.user.username,
              __v: loggedInUser.user.__v,
              _id: loggedInUser.user._id,
              parkId: [...parkIdCopy, park.id]
            }
          };
          setLoggedInUser(newUser);
          localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        } else if (loggedInUser.user.parkId.some(parkId => parkId.includes(park.id))) {
          const parkIdCopy = [...loggedInUser.user.parkId];
          const newParkIds = parkIdCopy.filter(parkId => parkId !== park.id);
          const newUser = {
            ...loggedInUser, user: {
              name: loggedInUser.user.name,
              password: loggedInUser.user.password,
              username: loggedInUser.user.username,
              __v: loggedInUser.user.__v,
              _id: loggedInUser.user._id,
              parkId: [...newParkIds]
            }
          };
          setLoggedInUser(newUser);
          localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        }
      });
    } else if (!loggedInUser) {
      return null;
    }
  };

  const filteredParks = npsData.filter(park => {
    if (searchValue === "") {
      return park;
    } else if (
      park.fullName.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) ||
      park.activities.some(activity => activity.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
    ) {
      return park;
    }
  }).filter(park => {
    if (stateValue === "") {
      return park;
    } else if (
      park.states.includes(stateValue)
    ) {
      return park;
    }
  }).filter(park => {
    if (typeValue === "") {
      return park;
    } else if (
      park.designation.includes(typeValue)
    ) {
      return park;
    }
  }).filter(park => {
    if (activityValue === "") {
      return park;
    } else if (
      park.activities.some(activity => activity.name.includes(activityValue || `${activityValue}`.includes(`${activity.name}`)))
    ) {
      return park;
    }
  }).filter(park => {
    if (!isInputChecked) {
      return park;
    } else if (
      loggedInUser.user.parkId.some(parkId => parkId.includes(park.id))
    ) {
      return park;
    }
  }).map((park, i) => {
    return <div key={park.id}>
      <form onSubmit={(e) => { handleSavePark(e, park.id); }}>
        <ParkCard
          id={park.id}
          img={park.images[0].url}
          fullName={park.fullName}
          states={park.states}
          designation={park.designation}
          description={park.description}
          activities={park.activities.map((activity, i) => {
            return <ActivityNames key={activity.id}>
              {activity.name}
              {i === park.activities.length - 1 ?
                "" :
                <div>&nbsp;/&nbsp;</div>
              }
            </ActivityNames>;
          })}
          hours={park.operatingHours.map((hours, i) => {
            return <ParkHours key={i}>
              <div>{hours.description}</div>
              <ParkHoursDays>
                <div><b>Monday:</b> {hours.standardHours.monday}</div>
                <div><b>Tuesday:</b> {hours.standardHours.tuesday}</div>
                <div><b>Wednesday:</b> {hours.standardHours.wednesday}</div>
                <div><b>Thursday:</b> {hours.standardHours.thursday}</div>
                <div><b>Friday:</b> {hours.standardHours.friday}</div>
                <div><b>Saturday:</b> {hours.standardHours.saturday}</div>
                <div><b>Sunday:</b> {hours.standardHours.sunday}</div>
              </ParkHoursDays>
            </ParkHours>;
          })}
          url={park.url}
          weatherInfo={park.weatherInfo}
          npsData={npsData}
        />
      </form>
    </div>;
  });

  const indexOfLastPark = currentPage * parksPerPage;
  const indexOfFirstPark = indexOfLastPark - parksPerPage;
  const currentParks = filteredParks.slice(indexOfFirstPark, indexOfLastPark);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <HeaderSection>
        <Title>NATIONAL PARK FINDER</Title>
        <LoginContainer onClick={handleOpenModal}>
          <Overlay id="overlay" />
          {loggedInUser && <Greeting>Hello, {loggedInUser.user.name}</Greeting>}
          <AccountCircleIcon
            sx={{
              marginLeft: "2%",
              fontSize: "2.8rem",
              cursor: "pointer",
              "@media (max-width: 499px)": {
                fontSize: "2.5rem"
              },
              "@media (max-width: 310px)": {
                fontSize: "2rem"
              }
            }} />
        </LoginContainer>
        {showLoginModal && <Login
          modalRef={modalRef}
          name={name}
          username={username}
          password={password}
          handleChangeName={(e) => { setName(e.target.value); }}
          handleChangeUsername={(e) => { setUsername(e.target.value); }}
          handleChangePassword={(e) => { setPassword(e.target.value); }}
          handleSignUp={(e) => { handleSignUp(e); }}
          handleCloseModal={handleCloseModal}
          handleLogin={(e) => { handleLogin(e); }}
          handleLogOut={(e) => { handleLogOut(e); }}
          showSignUp={showSignUp}
          setShowSignUp={() => { setShowSignUp(!showSignUp); }}
          passwordLengthError={passwordLengthError}
          userExistsError={userExistsError}
          invalidUserError={invalidUserError}
        />
        }
      </HeaderSection>
      <SearchSection>
        <SearchFilters
          searchValue={searchValue}
          onChangeSearch={handleSearchByName}
          stateValue={stateValue}
          onChangeState={handleFilterByState}
          typeValue={typeValue}
          onChangeType={handleFilterByType}
          activityValue={activityValue}
          onChangeActivity={handleFilterByActivity}
          handleFilterBySavedParks={handleFilterBySavedParks}
        />
      </SearchSection>
      <ParkSection>
        {isLoading ?
          (searchValue !== "" ?
            null :
            <LoaderSection >
              <Loader>
                {loaderText}
              </Loader>
            </LoaderSection>
          )
          :
          <div>
            {filteredParks.length ?
              <ParkQtyText>
                {filteredParks.length === 1 ?
                  <div>Showing {indexOfFirstPark + 1}-{filteredParks.length} of {filteredParks.length} park</div> :
                  (indexOfLastPark > filteredParks.length ?
                    <div>Showing {indexOfFirstPark + 1}-{filteredParks.length} of {filteredParks.length} parks</div> :
                    <div>Showing {indexOfFirstPark + 1}-{indexOfLastPark} of {filteredParks.length} parks</div>
                  )
                }
              </ParkQtyText> :
              null
            }
            {(searchValue !== "" ||
              typeValue !== "" ||
              activityValue !== "" ||
              stateValue !== "") &&
              currentParks.length === 0 ?
              <NoResults>No parks found</NoResults> :
              <ParkContainer>
                {currentParks}
              </ParkContainer>
            }
          </div>
        }
      </ParkSection>
      <PageSection>
        {isLoading ?
          null :
          <Pagination
            parksPerPage={parksPerPage}
            totalParks={filteredParks.length}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        }
      </PageSection>
    </div >
  );
}

export default App;