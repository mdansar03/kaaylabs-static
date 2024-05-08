function showOverview() {
    document.getElementById("overviewButton").classList.add("career_button_active");
    document.getElementById("applicationButton").classList.remove("career_button_active");
    document.getElementById("overview-block").classList.add("active-section");
    document.getElementById("application-block").classList.remove("active-section");
}

function showApplication() {
    document.getElementById("overviewButton").classList.remove("career_button_active");
    document.getElementById("applicationButton").classList.add("career_button_active");
    document.getElementById("overview-block").classList.remove("active-section");
    document.getElementById("application-block").classList.add("active-section");
}
