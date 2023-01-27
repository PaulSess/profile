const school_project_drop = document.getElementById("schooldrop")
const school_drop_icon = document.getElementById("school-drop-icon")
const school_projects = document.getElementById("school-projects")

school_project_drop.addEventListener("click", (event) => {
  console.log(event)
  // school_drop_icon.classList.remove("fa-solid", "fa-caret-right");
  // school_drop_icon.classList.toggle("fa-solid", "fa-caret-down");
  school_projects.classList.toggle("d-flex")


})
// console.log(school_project_drop.innerHTML)
