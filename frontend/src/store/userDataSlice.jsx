import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //  page 1
  email: { value: "", isError: "" },
  pswd: { value: "", isError: "" },
  rePswd: { value: "", isError: "" },
  //  page 2
  fullName: { value: "", isError: "" },
  fatherName: { value: "", isError: "" },
  dob: { value: "", isError: "" },
  phoneNo: { value: "", isError: "" },
  whatsappNo: { value: "", isError: "" },
  education: { value: "", isError: "" },
  occupation: { value: "", isError: "" },
  //  page 3
  country: { value: "", isError: "" },
  state: { value: "", isError: "" },
  district: { value: "", isError: "" },
  taluk: { value: "", isError: "" },
  postCode: { value: "", isError: "" },
  addressOne: { value: "", isError: "" },
  addressTwo: { value: "", isError: "" },
  //  page 4
  //   (  Support Type    )
  fullTime: { value: false, isError: "" },
  partTimeCheckBox: { value: false, isError: "" },
  partTime: { value: null, isError: "" },
  weeklyCheckBox: { value: false, isError: "" },
  weekly: { value: null, isError: "" },
  monthlyCheckBox: { value: false, isError: "" },
  monthly: { value: null, isError: "" },
  specialDayCheckBox: { value: false, isError: "" },
  specialDay: { value: null, isError: "" },
  //   (  Volunteer Role  )
  farmer: { value: false, isError: "" },
  educ: { value: false, isError: "" },
  health: { value: false, isError: "" },
  naturalCalmaity: { value: false, isError: "" },
  tree: { value: false, isError: "" },
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    // page1
    setEmail(state, action) {
      action.payload.type === "VALUE"
        ? (state.email.value = action.payload.value)
        : (state.email.isError = action.payload.value);
    },
    setPswd(state, action) {
      action.payload.type === "VALUE"
        ? (state.pswd.value = action.payload.value)
        : (state.pswd.isError = action.payload.value);
    },
    setRePswd(state, action) {
      action.payload.type === "VALUE"
        ? (state.rePswd.value = action.payload.value)
        : (state.rePswd.isError = action.payload.value);
    },
    // page2
    setFullName(state, action) {
      action.payload.type === "VALUE"
        ? (state.fullName.value = action.payload.value)
        : (state.fullName.isError = action.payload.value);
    },
    setFatherName(state, action) {
      action.payload.type === "VALUE"
        ? (state.fatherName.value = action.payload.value)
        : (state.fatherName.isError = action.payload.value);
    },
    setDob(state, action) {
      action.payload.type === "VALUE"
        ? (state.dob.value = action.payload.value)
        : (state.dob.isError = action.payload.value);
    },
    setPhoneNo(state, action) {
      action.payload.type === "VALUE"
        ? (state.phoneNo.value = action.payload.value)
        : (state.phoneNo.isError = action.payload.value);
    },
    setWhatsappNo(state, action) {
      action.payload.type === "VALUE"
        ? (state.whatsappNo.value = action.payload.value)
        : (state.whatsappNo.isError = action.payload.value);
    },
    setEducation(state, action) {
      action.payload.type === "VALUE"
        ? (state.education.value = action.payload.value)
        : (state.education.isError = action.payload.value);
    },
    setOccupation(state, action) {
      action.payload.type === "VALUE"
        ? (state.occupation.value = action.payload.value)
        : (state.occupation.isError = action.payload.value);
    },
    // page3
    setCountry(state, action) {
      action.payload.type === "VALUE"
        ? (state.country.value = action.payload.value)
        : (state.country.isError = action.payload.value);
    },
    setState(state, action) {
      action.payload.type === "VALUE"
        ? (state.state.value = action.payload.value)
        : (state.state.isError = action.payload.value);
    },
    setDistrict(state, action) {
      action.payload.type === "VALUE"
        ? (state.district.value = action.payload.value)
        : (state.district.isError = action.payload.value);
    },
    setTaluk(state, action) {
      action.payload.type === "VALUE"
        ? (state.taluk.value = action.payload.value)
        : (state.taluk.isError = action.payload.value);
    },
    setPostCode(state, action) {
      action.payload.type === "VALUE"
        ? (state.postCode.value = action.payload.value)
        : (state.postCode.isError = action.payload.value);
    },
    setAddressOne(state, action) {
      action.payload.type === "VALUE"
        ? (state.addressOne.value = action.payload.value)
        : (state.addressOne.isError = action.payload.value);
    },
    setAddressTwo(state, action) {
      action.payload.type === "VALUE"
        ? (state.addressTwo.value = action.payload.value)
        : (state.addressTwo.isError = action.payload.value);
    },
    // page4
    //   (  Support Type    )
    setFullTime(state, action) {
      action.payload.type === "VALUE"
        ? (state.fullTime.value = action.payload.value)
        : (state.fullTime.isError = action.payload.value);
    },
    setPartTimeCheckBox(state, action) {
      action.payload.type === "VALUE"
        ? (state.partTimeCheckBox.value = action.payload.value)
        : (state.partTimeCheckBox.isError = action.payload.value);
    },
    setPartTime(state, action) {
      action.payload.type === "VALUE"
        ? (state.partTime.value = action.payload.value)
        : (state.partTime.isError = action.payload.value);
    },
    setWeeklyCheckBox(state, action) {
      action.payload.type === "VALUE"
        ? (state.weeklyCheckBox.value = action.payload.value)
        : (state.weeklyCheckBox.isError = action.payload.value);
    },
    setWeekly(state, action) {
      action.payload.type === "VALUE"
        ? (state.weekly.value = action.payload.value)
        : (state.weekly.isError = action.payload.value);
    },
    setMonthlyCheckBox(state, action) {
      action.payload.type === "VALUE"
        ? (state.monthlyCheckBox.value = action.payload.value)
        : (state.monthlyCheckBox.isError = action.payload.value);
    },
    setMonthly(state, action) {
      action.payload.type === "VALUE"
        ? (state.monthly.value = action.payload.value)
        : (state.monthly.isError = action.payload.value);
    },
    setSpecialDayCheckBox(state, action) {
      action.payload.type === "VALUE"
        ? (state.specialDayCheckBox.value = action.payload.value)
        : (state.specialDayCheckBox.isError = action.payload.value);
    },
    setSpecialDay(state, action) {
      action.payload.type === "VALUE"
        ? (state.specialDay.value = action.payload.value)
        : (state.specialDay.isError = action.payload.value);
    },
    //   (  Volunteer Role  )
    setFarmer(state, action) {
      action.payload.type === "VALUE"
        ? (state.farmer.value = action.payload.value)
        : (state.farmer.isError = action.payload.value);
    },
    setEduc(state, action) {
      action.payload.type === "VALUE"
        ? (state.educ.value = action.payload.value)
        : (state.educ.isError = action.payload.value);
    },
    setHealth(state, action) {
      action.payload.type === "VALUE"
        ? (state.health.value = action.payload.value)
        : (state.health.isError = action.payload.value);
    },
    setNaturalCalmaity(state, action) {
      action.payload.type === "VALUE"
        ? (state.naturalCalmaity.value = action.payload.value)
        : (state.naturalCalmaity.isError = action.payload.value);
    },
    setTree(state, action) {
      action.payload.type === "VALUE"
        ? (state.tree.value = action.payload.value)
        : (state.tree.isError = action.payload.value);
    },
  },
});

const userDataReducer = userDataSlice.reducer;

export const userDataActions = userDataSlice.actions;

export default userDataReducer;
