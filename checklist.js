var firebaseConfig = {
    apiKey: "AIzaSyDjk0DHweWBYqiF-eBOYS9w_drOrbVgSJQ",
    authDomain: "medi-prototype.firebaseapp.com",
    databaseURL: "https://medi-prototype.firebaseio.com",
    projectId: "medi-prototype",
    storageBucket: "medi-prototype.appspot.com",
    messagingSenderId: "319143915855",
    appId: "1:319143915855:web:71b073842f7dd51f1b953a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function check_medicine() {
    window.location ="recognizer.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "sign_in.html";
    }
