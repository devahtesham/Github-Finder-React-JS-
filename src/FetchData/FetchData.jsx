import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import Error from "../ErrorPage/Error";

const FetchData = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [apiError, setApiError] = useState(false);
  const [callApi, setCallApi] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username ? username : "devahtesham"}`
      )
      .then((res) => {
        // console.log(res.data.bio);
        setUserInfo(res.data);
      })
      .catch((err) => {
        // console.log(err.message);
        setApiError(true);
      });
    setUsername("");
  }, [callApi]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!username) {
      return;
    }
    setCallApi(!callApi);
    // axios
    //   .get(`https://api.github.com/users/${username}`)
    //   .then((res) => {
    //     // console.log(res.data.bio);
    //     setUserInfo(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      {!apiError ? (
        <Card
          onsubmit={formSubmitHandler}
          onchange={usernameChangeHandler}
          value={username}
          userInfo={userInfo}
        />
      ) : (
        <Error />
      )}
    </>
  );
};

export default FetchData;
