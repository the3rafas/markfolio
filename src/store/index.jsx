import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const insialStorage = localStorage.getItem("login");
const insialId = localStorage.getItem("loginId");

const data = createSlice({
  name: "data",
  initialState: {
    users: [
      {
        id: "admin",
        name: "mohamed",
        email: "2000mohamed.arafa@gmail.com",
        password: "super arafa",
      },
      {
        id: "m1",
        name: "ahmed",
        email: "ahmed.test@gmail.com",
        password: "testtest",
      },
    ],
    templets: [
      {
        id: "admin",
        title: "mohamed",
        descrip:
          "2000mohamed.arafa@gmail.com 2000mohamed.arafa@gmail.com 2000mohamed.arafa@gmail.com 2000mohamed.arafa@gmail.com 2000mohamed.arafa@gmail.com 2000mohamed.arafa@gmail.com",
        img: "./images/card-2.jpg",
        link: "https://www.youtube.com/",
      },
      {
        id: "admin",
        title: "mohamed",
        descrip: "2000mohamed.arafa@gmail.com",
        img: "./images/card-1.jpg",
        link: "https://www.facebook.com/",
      },
    ],
    login: insialStorage == null ? false : true,
    loginID: insialId,
  },
  reducers: {
    loginFun(state, action) {
      const states = current(state.users);
      const localData = states.find((e) => e.email === action.payload.email);
      if (localData !== undefined) {
        if (
          localData.email === action.payload.email &&
          localData.password === action.payload.password
        ) {
          state.login = true;
          localStorage.setItem("login", true);
          localStorage.setItem(
            "loginId",
            states.find((e) => e.email === action.payload.email).id
          );

          state.loginID = states.find(
            (e) => e.email === action.payload.email
          ).id;
        } else {
          throw new Error("unvalid password");
        }
      } else {
        throw new Error("unvalid email");
      }
    },

    logUpFun(state, action) {
      const states = current(state.users);
      const localData = states.find((e) => e.email === action.payload.email);
      if (localData !== undefined) {
        throw new Error("this email is alredy exist");
      } else {
        state.users.push(action.payload);
      }
    },
    logOutFun(state) {
      state.login = false;
      localStorage.removeItem("login");
      console.log(insialStorage);
      console.log(state.login);
    },
    addtempFun(state, action) {
      state.templets.push(action.payload);
  
    },
  },
});

export const action = data.actions;

const store = configureStore({
  reducer: { user: data.reducer },
});

export default store;
