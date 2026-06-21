console.log("script loaded");

// REGISTER

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");

    });

}

// LOGIN

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        const enteredEmail =
            document.getElementById("loginEmail").value;

        const enteredPassword =
            document.getElementById("loginPassword").value;

        const savedEmail =
            localStorage.getItem("email");

        const savedPassword =
            localStorage.getItem("password");

        if (
            enteredEmail === savedEmail &&
            enteredPassword === savedPassword
        ) {

            localStorage.setItem("loggedIn", "true");

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

}

// WELCOME USER

const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser) {

    const name = localStorage.getItem("name");
    const loggedIn = localStorage.getItem("loggedIn");

    if (name && loggedIn === "true") {
        welcomeUser.textContent = `Welcome, ${name}`;
    } else {
        welcomeUser.textContent = "";
    }

}

// APPLY BUTTONS

const applyBtn1 = document.getElementById("applyBtn1");
const applyBtn2 = document.getElementById("applyBtn2");
const applyBtn3 = document.getElementById("applyBtn3");

if (applyBtn1) {
    applyBtn1.addEventListener("click", () => {

        if (localStorage.getItem("loggedIn") !== "true") {
            alert("Please Login or Register First!");
            window.location.href = "login.html";
            return;
        }

        localStorage.setItem("appliedJob", "Frontend Developer");
        localStorage.setItem("recentJob", "Frontend Developer");

        alert("Application Submitted Successfully!");
    });
}

if (applyBtn2) {
    applyBtn2.addEventListener("click", () => {

        if (localStorage.getItem("loggedIn") !== "true") {
            alert("Please Login or Register First!");
            window.location.href = "login.html";
            return;
        }

        localStorage.setItem("appliedJob", "UI/UX Designer");
        localStorage.setItem("recentJob", "UI/UX Designer");

        alert("Application Submitted Successfully!");
    });
}

if (applyBtn3) {
    applyBtn3.addEventListener("click", () => {

        if (localStorage.getItem("loggedIn") !== "true") {
            alert("Please Login or Register First!");
            window.location.href = "login.html";
            return;
        }

        localStorage.setItem("appliedJob", "Data Analyst");
        localStorage.setItem("recentJob", "Data Analyst");

        alert("Application Submitted Successfully!");
    });
}

// LOGOUT

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("loggedIn");

        alert("Logged Out Successfully!");

        window.location.href = "index.html";

    });

}

// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}

// SAVE JOBS

function toggleSave(jobTitle) {

    let savedJobs =
        JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!savedJobs.includes(jobTitle)) {

        savedJobs.push(jobTitle);

        localStorage.setItem(
            "savedJobs",
            JSON.stringify(savedJobs)
        );

        alert("Job Saved ❤️");

    } else {

        alert("Job Already Saved ❤️");

    }

}
// RECENTLY VIEWED

const recentJobsContainer =
document.getElementById("recentJobs");

if (recentJobsContainer) {

    const recentJob =
    localStorage.getItem("recentJob");

    if (recentJob) {

        recentJobsContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 class="text-xl font-bold dark:text-white">
                    ${recentJob}
                </h3>

                <p class="text-blue-600 mt-2">
                    Recently Viewed
                </p>
            </div>
        `;
    }
}
const savedJobsContainer =
document.getElementById("savedJobs");

if (savedJobsContainer) {

    const savedJobs =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

    savedJobs.forEach(job => {

        savedJobsContainer.innerHTML += `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 class="text-xl font-bold dark:text-white">
                    ${job}
                </h3>

                <p class="text-green-600 mt-2">
                    Saved Job ❤️
                </p>
            </div>
        `;
    });

}
function sendMessage() {
    alert("Message sent successfully 🚀");

    // optional: clear form
    document.querySelectorAll("input, textarea").forEach(el => el.value = "");
}
function applyJob() {
    alert("Job Applied 🚀");
}

function saveJob() {
    alert("Job Saved ❤️");
}