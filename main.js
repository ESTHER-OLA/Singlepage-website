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

// anchor link active
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offset = 100; // the offset

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// mobile navbar active
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
