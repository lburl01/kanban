# kanban

###The challenge?
Write your own API and the AJAX, JS, and HTML/CSS to make it a functional Heroku app. 

####My Program: 
A Trello clone

Functionality: 
* You can use a toggle button to reveal the "Add Task" input fields and submit button
* The Current Boards container utilizes filtering to only reveal one of each Board name (no duplicates allowed to be printed)
* Add Task utilizes POST to save the new task the database
* Current Tasks container utilizes AJAX and JS to show tasks with their priority indicated (taken from the radio buttons' stored values) and hovering over the task name will reveal the description/details of each task. 
* Pressing the 'X' will appear to delete a task from the Current Tasks container, but is actually triggering an event to change the value of that task in the 'deleted' column to TRUE so deleted tasks will not be shown to the user but still remain in the database. 
