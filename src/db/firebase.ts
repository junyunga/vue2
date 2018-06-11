import { Vue, Component } from "vue-property-decorator";

const firebase = require("firebase");
let config = {
  apiKey: "AIzaSyAYzPKHDRoNih_YwFxSRBABYJiPb3SGRlg",
  authDomain: "my-first-project-8745.firebaseapp.com",
  databaseURL: "https://my-first-project-8745.firebaseio.com",
  projectId: "my-first-project-8745",
  storageBucket: "my-first-project-8745.appspot.com",
  messagingSenderId: "680622789970"
};
firebase.initializeApp(config);
let app = firebase.initializeApp(config);
export default class DB {
  constructor() {
    let db = app.database();
  }
}
