const school_project_drop = document.getElementById("schooldrop")
const school_drop_icon = document.getElementById("school-drop-icon")
const school_projects = document.getElementById("school-projects")


// HAND mouse hover effect
const mouse1 = document.getElementById("mouse-click1")
school_project_drop.addEventListener("mouseover", function(event) {
  if (event.target.className === "sp") {
    mouse1.style.display = "block";
  }
});

document.addEventListener("mouseout", function(event) {
  if (event.target.className === "sp") {
    mouse1.style.display = "none";
  }
});

// // GITHUB mouse hover effect
// const ghlogoOG = document.getElementById("profile-link")
// ghlogoOG.addEventListener("mouseover", function(event) {
//   if (event.target.className === "showgh") {
//     document.getElementById("profile-link2").style.display = "block";
//     // ghlogoOG.style.display = "none";
//   }
// });

// document.addEventListener("mouseout", function(event) {
//   if (event.target.className === "showgh") {
//     document.getElementById("profile-link1").style.display = "none";
//   }
// });




school_project_drop.addEventListener("click", (event) => {
  console.log(event)
  // school_drop_icon.classList.remove("fa-solid", "fa-caret-right");
  // school_drop_icon.classList.toggle("fa-solid", "fa-caret-down");
  school_projects.classList.toggle("d-flex")


})
// console.log(school_project_drop.innerHTML)
