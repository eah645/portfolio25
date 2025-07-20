//This js file: Use for general js things

//Work Exp: Current / previous jobs and descriptions. Changes HTML / active class

function workBtnOIT() {
    //Remove active class from other buttons, and add the active class to OIT
    document.getElementById("OIT").classList.add("workBtn-active");
    document.getElementById("FT").classList.remove("workBtn-active");
    document.getElementById("BCMG").classList.remove("workBtn-active");

    //Change innerText of job desc
    document.getElementById("position").innerText = "Position: Level 2 Consultant";
    document.getElementById("date").innerText = "Date Worked: August 2025 -- Current";
    document.getElementById("description").innerText = "Helped Rutgers staff and students solve technical problems as they came up. Communicated with users over the phone, in-person, and through emails. Solved problems involving connecting to Wi-Fi and Two-Factor Authentication.";
}

function workBtnFT() {
    //Remove active classes from other buttons, add active class to F&T
    document.getElementById("FT").classList.add("workBtn-active");
    document.getElementById("OIT").classList.remove("workBtn-active");
    document.getElementById("BCMG").classList.remove("workBtn-active");

    //Change innerText of job desc
    document.getElementById("position").innerText = "Position: Intern for a Day (Web Development, CS)";
    document.getElementById("date").innerText = "Date Worked: April 2025";
    document.getElementById("description").innerText = "Description: Reviewed the F&T Group website and compiled a list of recommendations for improvement, ranging from font size modifications to resposiveness errors. Learned about networking by identifying routers and servers throughout the building.";
}

function workBtnBCMG() {
    //Remove active classes from other buttons, add active class to BCMG
    document.getElementById("BCMG").classList.add("workBtn-active");
    document.getElementById("OIT").classList.remove("workBtn-active");
    document.getElementById("FT").classList.remove("workBtn-active");

    //Change innerText of job desc
    document.getElementById("position").innerText = "Position: Web Design and Development Intern";
    document.getElementById("date").innerText = "Date Worked: June -- December 2024";
    document.getElementById("description").innerText = "Description: Buit websites through WordPress, utilizing plugins such as Breakdance or Nicepage. Created websites for different domains and used SEO practices in order to rank said websites higher when searched for, increasing their value.";
}