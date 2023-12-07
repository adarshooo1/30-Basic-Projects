window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please Enter Some Task");
      return;
    }

    // Create a div element; ex:<div></div>
    const task_el = document.createElement("div");
    // Sets class name to the div; ex:<div class="task"></div>
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    input.value = "";

    // Adding Div with class = content to the div whose class = task;
    task_el.appendChild(task_content_el);

    // Added todos
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    // Append the created todo with the parent.
    task_content_el.appendChild(task_input_el);

    // Append task in tasks
    list_el.appendChild(task_el);

    //----------------------------------------------------

    // Creating Action div
    const action_btn = document.createElement("div");
    action_btn.classList.add("actions");

    // creating edit action button
    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerHTML = "Edit";

    // creating edit action button
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerHTML = "Delete";

    action_btn.appendChild(edit_btn);
    action_btn.appendChild(delete_btn);

    // Append to the button parent
    task_el.appendChild(action_btn);

    // Button parent added to their parent
    list_el.appendChild(task_el);

    // Now Edit and Delete functionality
    // edit
    edit_btn.addEventListener("click", () => {
      if (edit_btn.innerHTML.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        edit_btn.innerHTML = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        edit_btn.innerHTML = "Edit";
      }
    });
    // Delete
    delete_btn.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
