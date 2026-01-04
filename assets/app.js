import { auth } from "../firebase/firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* -------------------------
   AUTH PROTECTION
------------------------- */
window.protectPage = function () {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index.html";
    }
  });
};

/* -------------------------
   LOGOUT (WORKS 100%)
------------------------- */
window.logout = function () {
  signOut(auth)
    .then(() => {
      localStorage.clear();
      window.location.href = "index.html";
    })
    .catch(err => {
      console.error("Logout error:", err);
      alert("Logout failed");
    });
};

/* -------------------------
   THEME TOGGLE
------------------------- */
window.toggleTheme = function () {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

/* Restore theme */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}
