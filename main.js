let input = document.querySelector("input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");

const saveTodo = (event) => {
  event.preventDefault();
  // console.log("This is an event");
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "list-group-item rounded-0";
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-danger btn-sm float-end rounded-0";
  li.appendChild(delBtn);
  ul.appendChild(li);
  form.reset();
};

form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  console.log("TRIGGERED");
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are you sure")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", removeTodo);
