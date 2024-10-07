document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");
  const createTaskForm = document.getElementById("create-task-form");

  // Function to add a task
  const addTask = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      const taskText = taskInput.value.trim(); // Get the input value and trim whitespace
      if (taskText === "") return; // Do nothing if the input is empty

      // Check if the task already exists in the list
      const existingTasks = Array.from(tasksList.children).map(item => item.firstChild.textContent);
      if (existingTasks.includes(taskText)) {
          alert("This task already exists!");
          return; // Stop the function if the task is a duplicate
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      // Create a delete button for the task
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
          li.remove(); // Remove the task from the list when clicked
      });

      li.appendChild(deleteBtn); // Append the button to the list item
      tasksList.appendChild(li); // Append the list item to the tasks list
      taskInput.value = ""; // Clear the input field
  };

  // Attach the event listener to the form submission
  createTaskForm.addEventListener("submit", addTask);
});
