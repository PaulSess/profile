const school_project_drop   = document.getElementById("schooldrop")
const school_projects       = document.getElementById("school-projects")
const team_project_drop     = document.getElementById("teamdrop")
const team_projects         = document.getElementById("team-projects")
const personal_project_drop = document.getElementById("personaldrop")
const personal_project      = document.getElementById("personal_projects")
const school_drop_icon      = document.getElementById("school-drop-icon")


// HAND mouse hover effect  SCHOOLPROJECTS
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

  // Display  SCHOOLPROJECTS
school_project_drop.addEventListener("click", (event) => {
  // console.log(event)
  if ($(window).width() < 1042) {
    school_projects.classList.toggle("d-block")
 }
  if ($(window).width() > 1042) {
   school_projects.classList.toggle("d-flex")
 }
})




// HAND mouse hover effect  TEAMPROJECTS
const mouseteam = document.getElementById("mouse-click-team")
team_project_drop.addEventListener("mouseover", function(event) {
  if (event.target.className === "team") {
    mouseteam.style.display = "block";
  }
});

document.addEventListener("mouseout", function(event) {
  if (event.target.className === "team") {
    mouseteam.style.display = "none";
  }
});

// Display  TEAMPROJECTS
team_project_drop.addEventListener("click", (event) => {
  // console.log(event)
  if ($(window).width() < 1042) {
    team_projects.classList.toggle("d-block")
 }
  if ($(window).width() > 1042) {
    team_projects.classList.toggle("d-flex")
  }
  // team_projects.classList.toggle("d-flex")
})




// HAND mouse hover effect  PERSONALPROJECTS
const mousepersonal         = document.getElementById("mouse-click-personal")
personal_project_drop.addEventListener("mouseover", function(event) {
  if (event.target.className === "personal") {
    mousepersonal.style.display = "block";
  }
});

document.addEventListener("mouseout", function(event) {
  if (event.target.className === "personal") {
    mousepersonal.style.display = "none";
  }
});

//       // dispaly personal_projects
// personal_project_drop.addEventListener("click", (event) => {
//   // if ($(window).width() < 1042) {
//   //   personal_project.classList.toggle("d-block")
//   // }
//   // if ($(window).width() > 1042) {
//   //   personal_project.classList.toggle("d-flex")
//   // }
//   // personal_project.classList.toggle("d-none")
//   personal_project.classList.toggle("d-block")
// }) //to be made when the modal works



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
