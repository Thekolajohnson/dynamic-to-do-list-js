// Wait for the DOM to fully load before executing the code
document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get the input value and trim any whitespace
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }
        
        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the list item when the button is clicked
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when the button is clicked
    taskInput.addEventListener('keypress', (event) => {
        // Check if the 'Enter' key is pressed
        if (event.key === 'Enter') {
            addTask(); // Call addTask when 'Enter' is pressed
        }
    });

    // Optional: Invoke addTask function on DOMContentLoaded to start with a clean state
});
