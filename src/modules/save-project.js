const allProjects = document.querySelector(".project-list");

function saveProject(objName, obj) {
  localStorage.setItem(objName, JSON.stringify(obj));
  const list = document.createElement("li");
  list.textContent = obj.name;
  allProjects.appendChild(list);
};

export {saveProject};