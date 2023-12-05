import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDataActions } from "../store/userDataSlice";
import DisplayError from "./UI/DisplayError";
import NextButton from "./UI/NextButton";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../config/firebase";

const Accounttype = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, pswd, rePswd } = useSelector((state) => state.userData);

  const signInWithGoogleHandler = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response.user);
    } catch (error) {
      console.error(error);
    }
    navigate("/person-info");
  };

  const signInWithFacebookHandler = async () => {
    try {
      const response = await signInWithPopup(auth, facebookProvider);
      dispatch(
        userDataActions.setEmail({ type: "VALUE", value: response.user.email })
      );
      dispatch(
        userDataActions.setPswd({ type: "VALUE", value: response.user.email })
      );
      console.log(response.user);
    } catch (error) {
      console.error(error);
    }
    navigate("/person-info");
  };

  const nextButtonHandler = () => {
    if (
      email.value.trim() === "" &&
      pswd.value.trim() === "" &&
      rePswd.value.trim() === ""
    ) {
      dispatch(
        userDataActions.setEmail({ type: "error", value: "Email is required" })
      );
      dispatch(
        userDataActions.setPswd({
          type: "error",
          value: "Password is required",
        })
      );
      dispatch(
        userDataActions.setRePswd({
          type: "error",
          value: "Re-enter Password is required",
        })
      );
    }
    //  EMAIL
    else if (email.value.trim() === "") {
      dispatch(
        userDataActions.setEmail({ type: "error", value: "Email is required" })
      );
    } else if (!email.value.trim().includes("@")) {
      dispatch(
        userDataActions.setEmail({
          type: "error",
          value: "Email is not valid",
        })
      );
    }
    // PASSWORD
    else if (pswd.value.trim() === "") {
      dispatch(
        userDataActions.setPswd({
          type: "error",
          value: "Password is required",
        })
      );
    } else if (pswd.value.trim().length < 8) {
      dispatch(
        userDataActions.setPswd({
          type: "error",
          value: "Password must be at least 8 characters",
        })
      );
    }
    // REPEAT PASSWORD
    else if (rePswd.value.trim() === "") {
      dispatch(
        userDataActions.setRePswd({
          type: "error",
          value: "Re-enter Password is required",
        })
      );
    } else if (rePswd.value.trim().length < 8) {
      dispatch(
        userDataActions.setRePswd({
          type: "error",
          value: "ReEnter Password must also be 8 characters",
        })
      );
    } else if (pswd.value.trim() !== rePswd.value.trim()) {
      dispatch(
        userDataActions.setRePswd({
          type: "error",
          value: "Passwords do not match",
        })
      );
    } else {
      navigate("/person-info");
    }
  };
  return (
    <section className="lg:p-20">
      <div className="text-center space-y-2">
        <h2 className="text-ternary text-2xl font-semibold">Sign Up</h2>
        <h6 className="text-sm text-gray-400 font-medium">
          Your Social Campaigns
        </h6>
      </div>
      {/* Login Buttons */}
      <div className="flex justify-between items-center pt-10 pb-5">
        <button
          onClick={signInWithGoogleHandler}
          className="rounded-md px-4 py-2 text-gray-600  
            text-sm border w-[49%] font-medium
            flex justify-center items-center gap-3
            hover:text-secondary transition-colors ease-in-out 
            hover:drop-shadow-2xl shadow-secondary"
        >
          <FaGoogle className="scale-[1.4]" />
          <span>Sign in with Google</span>
        </button>
        <button
          onClick={signInWithFacebookHandler}
          className="rounded-md px-4 py-2 text-gray-600  
            text-sm border w-[49%] font-medium
            flex justify-center items-center gap-3
            hover:text-secondary transition-colors ease-in-out 
            hover:drop-shadow-2xl shadow-secondary"
        >
          <FaFacebook className="scale-[1.4]" />
          <span>Sign in with Facebook</span>
        </button>
      </div>
      {/* line through */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#FCFCFC] px-4 text-xs text-gray-500">
            Or with email
          </span>
        </div>
      </div>
      <div>
        <div className="space-y-5 pt-5">
          <input
            type="text"
            placeholder="Email"
            className={email.isError ? "inputError" : "formInput"}
            value={email.value}
            onFocus={() =>
              dispatch(
                userDataActions.setEmail({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) =>
              dispatch(
                userDataActions.setEmail({
                  type: "VALUE",
                  value: e.target.value,
                })
              )
            }
          />
          {email.isError && <DisplayError errorMsg={email.isError} />}
          <input
            type="text"
            placeholder="Password"
            className={pswd.isError ? "inputError" : "formInput"}
            value={pswd.value}
            onFocus={() =>
              dispatch(
                userDataActions.setPswd({
                  type: "ERROR",
                  value: "",
                })
              )
            }
            onChange={(e) =>
              dispatch(
                userDataActions.setPswd({
                  type: "VALUE",
                  value: e.target.value,
                })
              )
            }
          />
          {pswd.isError && <DisplayError errorMsg={pswd.isError} />}
        </div>
        <div className="flex">
          {[1, 2, 3, 4].map((value) => (
            <hr
              className="w-[24%] h-[6px] mx-auto my-3 bg-[#DBDFE9] border-0 rounded-full"
              key={value}
            />
          ))}
        </div>
        <h5 className="text-sm text-gray-400 font-medium pb-1">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </h5>
        <input
          type="text"
          placeholder="Repeat Password"
          className={rePswd.isError ? "inputError mt-7" : "formInput my-7"}
          value={rePswd.value}
          onFocus={() =>
            dispatch(
              userDataActions.setRePswd({
                type: "ERROR",
                value: "",
              })
            )
          }
          onChange={(e) =>
            dispatch(
              userDataActions.setRePswd({
                type: "VALUE",
                value: e.target.value,
              })
            )
          }
        />
        {rePswd.isError && (
          <DisplayError errorMsg={rePswd.isError} classname="py-2" />
        )}
        <div className="flex gap-3 items-center p-2">
          <input type="checkbox" className="w-5 h-5 accent-secondary" />
          <h2 className="text-ternary text-sm">
            I Accept the <span className="text-secondary">Terms</span>
          </h2>
        </div>
        <h6 className="text-center py-10 text-sm text-gray-500 font-medium">
          Already have an Account?
          <span className="text-secondary cursor-pointer"> Sign in</span>{" "}
        </h6>
        <div className="flex justify-end">
          <NextButton dispText="Continue" onClick={nextButtonHandler} />
        </div>
      </div>
    </section>
  );
};

export default Accounttype;
