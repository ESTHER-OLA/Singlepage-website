function updateDateTime() {
  let now = new Date();

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayElement = document.getElementById("currentDay");
  if (currentDayElement) {
    currentDayElement.textContent = daysOfWeek[now.getUTCDay()];
  }

  let currentTimeUTCElement = document.getElementById("currentTimeUTC");
  if (currentTimeUTCElement) {
    currentTimeUTCElement.textContent = now
      .toISOString()
      .split("T")[1]
      .slice(0, 8);
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);

// dropdown actions function
document.addEventListener("DOMContentLoaded", function () {
  var dropdownIcons = document.querySelectorAll(".dropdown-icon");

  dropdownIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var parent = this.closest(".colProf");
      parent.classList.toggle("expanded");
    });
  });
});
