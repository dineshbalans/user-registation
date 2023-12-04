import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PreviousButton from "./UI/PreviousButton";
import NextButton from "./UI/NextButton";
import DisplayError from "./UI/DisplayError";
import { userDataActions } from "../store/userDataSlice";
import { COUNTRIES, STATES } from "../data/personalDetailData";

const PersonDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { country, state, district, taluk, postCode, addressOne, addressTwo } =
    useSelector((state) => state.userData);

  const nextButtonHandler = () => {
    if (
      country.value.trim() === "" &&
      state.value.trim() === "" &&
      district.value.trim() === "" &&
      taluk.value.trim() === "" &&
      postCode.value.trim() === "" &&
      addressOne.value.trim() === "" &&
      addressTwo.value.trim() === ""
    ) {
      dispatch(
        userDataActions.setCountry({
          type: "error",
          value: "Country is required",
        })
      );
      dispatch(
        userDataActions.setState({
          type: "error",
          value: "State is required",
        })
      );
      dispatch(
        userDataActions.setDistrict({
          type: "error",
          value: "District is required",
        })
      );
      dispatch(
        userDataActions.setTaluk({
          type: "error",
          value: "Taluk is required",
        })
      );
      dispatch(
        userDataActions.setPostCode({
          type: "error",
          value: "Post-Code is required",
        })
      );
      dispatch(
        userDataActions.setAddressOne({
          type: "error",
          value: "Address One is required",
        })
      );
      dispatch(
        userDataActions.setAddressTwo({
          type: "error",
          value: "Address Two is required",
        })
      );
    }
    // COUNTRY
    else if (country.value.trim() === "") {
      dispatch(
        userDataActions.setCountry({
          type: "error",
          value: "Country is required",
        })
      );
    }
    // STATES
    else if (state.value.trim() === "") {
      dispatch(
        userDataActions.setState({
          type: "error",
          value: "State is required",
        })
      );
    }
    // DISTRICT
    else if (district.value.trim() === "") {
      dispatch(
        userDataActions.setDistrict({
          type: "error",
          value: "District is required",
        })
      );
    }
    // TALUK
    else if (taluk.value.trim() === "") {
      dispatch(
        userDataActions.setTaluk({
          type: "error",
          value: "Taluk is required",
        })
      );
    }
    // POST CODE
    else if (postCode.value.trim() === "") {
      dispatch(
        userDataActions.setPostCode({
          type: "error",
          value: "Post-Code is required",
        })
      );
    }
    // ADDRESS ONE
    else if (addressOne.value.trim() === "") {
      dispatch(
        userDataActions.setAddressOne({
          type: "error",
          value: "Address One is required",
        })
      );
    }
    // ADDRESS TWO
    else if (addressTwo.value.trim() === "") {
      dispatch(
        userDataActions.setAddressTwo({
          type: "error",
          value: "Address Two is required",
        })
      );
    } else {
      navigate("/support");
    }
  };

  return (
    <section className="mdl:p-20 text-sm font-[420] space-y-7 lg:space-y-5">
      {/* Country */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="country"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Country</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <select
            id="country"
            className={country.isError ? "inputError" : "w-full input"}
            onFocus={() =>
              dispatch(
                userDataActions.setCountry({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setCountry({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          >
            {COUNTRIES.map((country) => country)}
          </select>
        </div>
      </div>
      {country.isError && <DisplayError errorMsg={country.isError} />}
      {/* State */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="state"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>State</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <select
            id="state"
            className={state.isError ? "inputError" : "w-full input"}
            onFocus={() =>
              dispatch(
                userDataActions.setState({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setState({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          >
            {STATES.map((state) => state)}
          </select>
        </div>
      </div>
      {state.isError && <DisplayError errorMsg={state.isError} />}
      {/* District */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="district"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>District</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="district"
            type="text"
            className={district.isError ? "inputError" : "w-full input"}
            placeholder="District"
            value={district.value}
            onFocus={() =>
              dispatch(
                userDataActions.setDistrict({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setDistrict({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {district.isError && <DisplayError errorMsg={district.isError} />}
      {/* Taluk */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="taluk"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Taluk</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="taluk"
            type="text"
            className={taluk.isError ? "inputError" : "w-full input"}
            placeholder="Taluk"
            value={taluk.value}
            onFocus={() =>
              dispatch(
                userDataActions.setTaluk({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setTaluk({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {taluk.isError && <DisplayError errorMsg={taluk.isError} />}
      {/* Post Code */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="postCode"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Post Code</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="postCode"
            type="text"
            className={postCode.isError ? "inputError" : "w-full input"}
            placeholder="Post Code"
            value={postCode.value}
            onFocus={() =>
              dispatch(
                userDataActions.setPostCode({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setPostCode({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {postCode.isError && <DisplayError errorMsg={postCode.isError} />}
      {/* Address 1 */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="addressOne"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Address 1</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="addressOne"
            type="text"
            className={addressOne.isError ? "inputError" : "w-full input"}
            placeholder="Address One"
            value={addressOne.value}
            onFocus={() =>
              dispatch(
                userDataActions.setAddressOne({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setAddressOne({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {addressOne.isError && <DisplayError errorMsg={addressOne.isError} />}
      {/* Address 2 */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="addressTwo"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Address 2</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="addressTwo"
            type="text"
            className={addressTwo.isError ? "inputError" : "w-full input"}
            placeholder="Address Two"
            value={addressTwo.value}
            onFocus={() =>
              dispatch(
                userDataActions.setAddressTwo({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setAddressTwo({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {addressTwo.isError && <DisplayError errorMsg={addressTwo.isError} />}
      <div className="flex justify-between pt-16">
        <PreviousButton URL="/person-info" />
        <NextButton dispText="Continue" onClick={nextButtonHandler} />
      </div>
    </section>
  );
};

export default PersonDetails;
// 120
