import React, { useState } from "react";
import PreviousButton from "./UI/PreviousButton";
import NextButton from "./UI/NextButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../store/userDataSlice";

const SupportType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);

  const {
    fullTime,
    partTimeCheckBox,
    partTime,
    weeklyCheckBox,
    weekly,
    monthlyCheckBox,
    monthly,
    specialDayCheckBox,
    specialDay,
    farmer,
    educ,
    health,
    naturalCalmaity,
    tree,
  } = userData;

  const nextButtonHandler = async () => {
    const transformedDATA = {};
    for (const key in userData) {
      if (Object.hasOwnProperty.call(userData, key)) {
        transformedDATA[key] = userData[key].value;
      }
    }
    console.log(transformedDATA);

    // Perform the fetch request
    fetch("http://localhost:8080/register", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(transformedDATA),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data
        console.log("Registration successful:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error during registration:", error);
      });

    navigate("/what-next");
  };
  return (
    <section className="mdl:p-20 text-sm font-[420] space-y-7">
      {/* Support Type */}
      <div>
        <h1 className="text-xl font-medium pt-7 pb-12">Support Type</h1>
        <div className="space-y-9">
          {/* Full Time */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="fulltime"
              className="w-10 h-5 accent-secondary"
              checked={fullTime.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setFullTime({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="fulltime" className="w-24">
              Full Time
            </label>
          </div>
          {/* Part Time */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="parttime"
              className="w-10 h-5 accent-secondary "
              checked={partTimeCheckBox.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setPartTimeCheckBox({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="parttime" className="w-24">
              Part Time
            </label>
            <input
              type="time"
              className={`input w-[35%] ${
                !partTimeCheckBox.value && " cursor-not-allowed"
              }`}
              disabled={!partTimeCheckBox.value}
              value={partTime.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setPartTime({
                    type: "VALUE",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          {/* Weekly */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="weekly"
              className="w-10 h-5 accent-secondary "
              checked={weeklyCheckBox.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setWeeklyCheckBox({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="weekly" className="w-24">
              Weekly
            </label>
            <input
              type="text"
              className={`input w-[35%] ${
                !weeklyCheckBox.value && " cursor-not-allowed"
              }`}
              disabled={!weeklyCheckBox.value}
              placeholder="Weekly"
              value={weekly.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setWeekly({
                    type: "VALUE",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          {/* Monthly */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="monthly"
              className="w-10 h-5 accent-secondary "
              checked={monthlyCheckBox.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setMonthlyCheckBox({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="monthly" className="w-24">
              Monthly
            </label>
            <input
              type="text"
              className={`input w-[35%] ${
                !monthlyCheckBox.value && " cursor-not-allowed"
              }`}
              disabled={!monthlyCheckBox.value}
              placeholder="Monthly"
              value={monthly.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setMonthly({
                    type: "VALUE",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          {/* Special Day */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="specialday"
              className="w-10 h-5 accent-secondary "
              checked={specialDayCheckBox.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setSpecialDayCheckBox({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="specialday" className="w-24">
              Special Day
            </label>
            <input
              type="text"
              className={`input w-[35%] ${
                !specialDayCheckBox.value && " cursor-not-allowed"
              }`}
              disabled={!specialDayCheckBox.value}
              placeholder="Special Day"
              value={specialDay.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setSpecialDay({
                    type: "VALUE",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
      {/* Volunteer Role */}
      <div>
        <h1 className="text-xl font-medium pt-7 pb-12">Volunteer Role</h1>
        <div className="space-y-9">
          {/* Farmer */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="Farmer"
              className="w-10 h-5 accent-secondary "
              checked={farmer.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setFarmer({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="Farmer">
              Farmer (Seed Supply,Loan Repayment,Water Support,etc...)
            </label>
          </div>
          {/* Education */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="Education"
              className="w-10 h-5 accent-secondary "
              checked={educ.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setEduc({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="Education">
              Education (Tuition(Online and Offline),Education Fee,Notebook
              Supply,etc...)
            </label>
          </div>
          {/* Health */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="Health"
              className="w-10 h-5 accent-secondary "
              checked={health.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setHealth({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="Health">Health</label>
          </div>
          {/* Natural Calamities */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="Natural Calamities"
              className="w-10 h-5 accent-secondary "
              checked={naturalCalmaity.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setNaturalCalmaity({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label
              htmlFor="Natural Calamities
"
            >
              Natural Calamities
            </label>
          </div>
          {/* Tree-Planting Program */}
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="Tree-Planting Program"
              className="w-10 h-5 accent-secondary "
              checked={tree.value}
              onChange={(e) => {
                dispatch(
                  userDataActions.setTree({
                    type: "VALUE",
                    value: e.target.checked,
                  })
                );
              }}
            />
            <label htmlFor="Tree-Planting Program">Tree-Planting Program</label>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-16">
        <PreviousButton URL="/person-details" />
        <NextButton onClick={nextButtonHandler} />
      </div>
    </section>
  );
};

export default SupportType;
