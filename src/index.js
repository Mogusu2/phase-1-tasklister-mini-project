document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task-description");
    const tasksList = document.getElementById("tasks");
    const createTaskForm = document.getElementById("create-task-form");
  
    // Function to add a task
    const addTask = (event) => {
        event.preventDefault(); // Prevent default form submission
  
        const taskText = taskInput.value.trim(); // Trim spaces
        if (taskText === "") return; // Exit if input is empty
  
        // Check for case-insensitive duplicate tasks
        const existingTasks = Array.from(tasksList.children)
            .map(item => item.firstChild.textContent.toLowerCase().trim());
        if (existingTasks.includes(taskText.toLowerCase())) {
            alert("This task already exists!");
            return; // Exit if duplicate is found
        }
  
        const li = document.createElement("li");
        li.textContent = taskText;
        li.setAttribute("role", "listitem"); // ARIA role for accessibility
  
        // Create a delete button for the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("aria-label", `Delete task: ${taskText}`); // Accessibility label
  
        deleteBtn.addEventListener("click", () => {
            li.remove(); // Remove the task from the list when clicked
        });
  
        li.appendChild(deleteBtn); // Append the button to the list item
        tasksList.appendChild(li); // Append the list item to the tasks list
        taskInput.value = ""; // Clear the input field
        taskInput.focus(); // Return focus to the input field for convenience
    };
  
    // Attach the event listener to the form submission
    createTaskForm.addEventListener("submit", addTask);
  });
  