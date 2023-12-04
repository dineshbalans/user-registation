import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDataActions } from "../store/userDataSlice";
import PreviousButton from "./UI/PreviousButton";
import NextButton from "./UI/NextButton";
import DisplayError from "./UI/DisplayError";

const PersonInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    fullName,
    fatherName,
    dob,
    phoneNo,
    whatsappNo,
    education,
    occupation,
  } = useSelector((state) => state.userData);
  const [avatar, setAvatar] = useState(null);

  const nextButtonHandler = () => {
    if (
      fullName.value.trim() === "" &&
      fatherName.value.trim() === "" &&
      dob.value.trim() === "" &&
      phoneNo.value.trim() === "" &&
      whatsappNo.value.trim() === "" &&
      education.value.trim() === "" &&
      occupation.value.trim() === ""
    ) {
      dispatch(
        userDataActions.setFullName({
          type: "error",
          value: "Full Name is required",
        })
      );
      dispatch(
        userDataActions.setFatherName({
          type: "error",
          value: "Father Name is required",
        })
      );
      dispatch(
        userDataActions.setDob({
          type: "error",
          value: "Date Of Birth is required",
        })
      );
      dispatch(
        userDataActions.setPhoneNo({
          type: "error",
          value: "Phone Number is required",
        })
      );
      dispatch(
        userDataActions.setWhatsappNo({
          type: "error",
          value: "WhatsApp Number is required",
        })
      );
      dispatch(
        userDataActions.setEducation({
          type: "error",
          value: "Eductaion is required",
        })
      );
      dispatch(
        userDataActions.setOccupation({
          type: "error",
          value: "Occupation is required",
        })
      );
    }
    // FULL NAME
    else if (fullName.value.trim() === "") {
      dispatch(
        userDataActions.setFullName({
          type: "error",
          value: "Full Name is required",
        })
      );
    }
    // FATHER_NAME
    else if (fatherName.value.trim() === "") {
      dispatch(
        userDataActions.setFatherName({
          type: "error",
          value: "Father Name is required",
        })
      );
    }
    // DOB
    else if (dob.value.trim() === "") {
      dispatch(
        userDataActions.setDob({
          type: "error",
          value: "Date Of Birth is required",
        })
      );
    }
    // PHONE NO
    else if (phoneNo.value.trim() === "") {
      dispatch(
        userDataActions.setPhoneNo({
          type: "error",
          value: "Phone Number is required",
        })
      );
    }
    // WHATSAPP NO
    else if (whatsappNo.value.trim() === "") {
      dispatch(
        userDataActions.setWhatsappNo({
          type: "error",
          value: "WhatsApp Number is required",
        })
      );
    }
    // EDUCATION
    else if (education.value.trim() === "") {
      dispatch(
        userDataActions.setEducation({
          type: "error",
          value: "Eductaion is required",
        })
      );
    }
    // OCCUPATION
    else if (occupation.value.trim() === "") {
      dispatch(
        userDataActions.setOccupation({
          type: "error",
          value: "Occupation is required",
        })
      );
    } else {
      navigate("/person-details");
    }
  };

  const avatarHandler = (event) => {
    console.log(event.target.files);
    setAvatar(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <section className="mdl:p-20 text-sm font-[420] space-y-7 lg:space-y-5">
      <hr className="my-5" />
      {/* Avatar */}
      <div className="flex flex-wrap-reverse w-full items-center">
        <label className=" w-full lg:w-[25%] flex gap-1 justify-center lg:justify-normal">
          <span>Avatar</span>
        </label>
        <div className="flex flex-col w-full lg:w-[70%] px-5 justify-center gap-2 items-center lg:items-start">
          <div className="flex justify-end w-32">
            <label htmlFor="files" className="cursor-pointer">
              <RiUploadCloud2Fill className="scale-110" />
            </label>
          </div>
          <img
            src={avatar}
            alt=""
            className="w-32 h-32 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
          />
          <div className="flex justify-end w-32">
            <button onClick={(event) => setAvatar(null)}>
              <MdOutlineCancel className="scale-110" />
            </button>
          </div>
          <h6 className="text-xs text-gray-400 pb-2">
            Allowed file types: png, jpg, jpeg.
          </h6>
        </div>
        {/* Hidden in the UI */}
        <div className="flex justify-between">
          <input
            id="files"
            type="file"
            className="hidden"
            onChange={avatarHandler}
          />
        </div>
      </div>
      {/* Full Name */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="fullName"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Full Name</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="fullName"
            type="text"
            className={fullName.isError ? "inputError" : "w-full input"}
            placeholder="Name (With Initial)"
            value={fullName.value}
            onFocus={() =>
              dispatch(
                userDataActions.setFullName({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setFullName({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {fullName.isError && <DisplayError errorMsg={fullName.isError} />}
      {/* Father Name */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="fatherName"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Father Name</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="fatherName"
            type="text"
            className={fatherName.isError ? "inputError" : "w-full input"}
            placeholder="Father Name"
            value={fatherName.value}
            onFocus={() =>
              dispatch(
                userDataActions.setFatherName({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setFatherName({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {fatherName.isError && <DisplayError errorMsg={fatherName.isError} />}
      {/* Date of Birth */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="dob"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Date of Birth</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="dob"
            type="date"
            className={dob.isError ? "inputError" : "w-full input"}
            value={dob.value}
            onFocus={() =>
              dispatch(
                userDataActions.setDob({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setDob({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {dob.isError && <DisplayError errorMsg={dob.isError} />}
      {/* Phone Number */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="phoneNo"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Phone Number</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="phoneNo"
            type="text"
            className={phoneNo.isError ? "inputError" : "w-full input"}
            placeholder="Phone Number"
            value={phoneNo.value}
            onFocus={() =>
              dispatch(
                userDataActions.setPhoneNo({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setPhoneNo({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {phoneNo.isError && <DisplayError errorMsg={phoneNo.isError} />}
      {/* Whatsapp Number */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="whatsappNo"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Whatsapp Number</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="whatsappNo"
            type="text"
            className={whatsappNo.isError ? "inputError" : "w-full input"}
            placeholder="Whatsapp Number"
            value={whatsappNo.value}
            onFocus={() =>
              dispatch(
                userDataActions.setWhatsappNo({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setWhatsappNo({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {whatsappNo.isError && <DisplayError errorMsg={whatsappNo.isError} />}
      {/* Education */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="education"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Education</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <select
            id="education"
            className={education.isError ? "inputError" : "w-full input"}
            onFocus={() =>
              dispatch(
                userDataActions.setEducation({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setEducation({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          >
            <option value="">Select a Education...</option>
            <option value="8th">8th</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Diplomo">Diplomo</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>
      </div>
      {education.isError && <DisplayError errorMsg={education.isError} />}
      {/* Occupation */}
      <div className="flex flex-wrap w-full items-center gap-2 sml:gap-0">
        <label
          htmlFor="occupation"
          className="w-full sml:w-[25%] flex gap-1 justify-center sml:justify-normal"
        >
          <span>Occupation</span>
          <FaAsterisk className="text-red-500 scale-50" />
        </label>
        <div className="w-full sml:w-[70%]">
          <input
            id="occupation"
            type="text"
            className={occupation.isError ? "inputError" : "w-full input"}
            placeholder="Occupation"
            value={occupation.value}
            onFocus={() =>
              dispatch(
                userDataActions.setOccupation({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) => {
              dispatch(
                userDataActions.setOccupation({
                  type: "VALUE",
                  value: e.target.value,
                })
              );
            }}
          />
        </div>
      </div>
      {occupation.isError && <DisplayError errorMsg={occupation.isError} />}
      <div className="flex justify-between pt-16">
        <PreviousButton />
        <NextButton dispText="Continue" onClick={nextButtonHandler} />
      </div>
    </section>
  );
};

export default PersonInfo;
// 158
