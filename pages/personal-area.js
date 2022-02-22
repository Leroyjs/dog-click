import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { ConsentProcessing } from "../components/sections/ConsentProcessing";
import { LoginSection } from "../components/sections/LoginSection";
import { PersonalAreaSection } from "../components/sections/PersonalAreaSection";
import { TitleBlock } from "../components/sections/TitleBlock";
import { config } from "../config";

export default function PersonalArea() {
  const [token, setToken] = useState(false);
  const [petIds, setPetIds] = useState([]);
  const [pets, setPets] = useState([]);
  const [consentProcessingStatus, setConsentProcessingStatus] = useState(true);

  useEffect(() => {
    if (consentProcessingStatus && token) {
      axios
        .post(`${config.domain}/api/public/pet-owners/get-my-pets`, {
          token: localStorage.getItem("sessionToken"),
        })
        .then(function (response) {
          setToken(localStorage.getItem("sessionToken"));
          setPetIds(response.data);
        })
        .catch(function (error) {
          if (error.response.status === 403) {
            setConsentProcessingStatus(false);
            setToken(localStorage.getItem("sessionToken"));
          } else {
            setToken(false);
          }
        });
    }
  }, [consentProcessingStatus, token]);

  useEffect(() => {
    if (petIds.length) {
      axios
        .post(`${config.domain}/api/public/pets`, {
          petsIds: petIds,
          pageSize: 9999,
        })
        .then(function (response) {
          setPets(response.data.items);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [petIds]);

  function handleClearAll() {
    axios
      .post(`${config.domain}/api/public/pet-owners/remove-my-pets`, {
        token,
      })
      .then(function (response) {
        setNewToken(false);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function setNewToken(token) {
    setToken(token);
    localStorage.setItem("sessionToken", token);
  }
  return (
    <MainWrapper>
      <TitleBlock>Личный кабинет</TitleBlock>
      <div className="personal-area__inner">
        {token ? (
          consentProcessingStatus ? (
            <PersonalAreaSection handleClearAll={handleClearAll} pets={pets} />
          ) : (
            <ConsentProcessing
              mainAction={setConsentProcessingStatus}
              token={token}
            />
          )
        ) : (
          <LoginSection setNewToken={setNewToken} />
        )}
      </div>
      <Footer />
    </MainWrapper>
  );
}