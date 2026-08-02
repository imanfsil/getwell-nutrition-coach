const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const patientId = document.getElementById("patientId").value.trim();
    const password = document.getElementById("password").value;

    if (!patientId || !password) {
        alert("Please enter Patient ID and Password.");
        return;
    }

    // Temporary format:
    // Patient ID: PT0001
    // Email becomes: PT0001@getwell.com

    const email = patientId + "@getwell.com";

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Login successful!");

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

});
