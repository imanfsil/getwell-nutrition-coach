import {
    auth,
    signInWithEmailAndPassword
} from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const patientId = document.getElementById("patientId").value.trim();
    const password = document.getElementById("password").value;

    if (!patientId || !password) {
        alert("Please enter Patient ID and Password.");
        return;
    }

    const email = patientId.toLowerCase() + "@getwell.com";

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

});
