var $tasks = $('#tasks')

var $taskDescription = $('#task-description')

var $createTaskBtn = $('#create-task')

$.ajax({
  method: 'GET',
  url: '/api/tasks',
  dataType: 'json'
}).done(function(tasks) { // when this request is done, execute this function:
  var boards = tasks.map(function(task) { return task.board; })
  var taskNames = tasks.map(function(task) { return task.name; })
  // $tasks.text(boards.join(', '))
  $tasks.text(taskNames.join(', '))
}).fail(function() {
  console.log('help me')
})

function createTask() {
  var description = $taskDescription.val();

  return $.ajax({
    method: 'POST',
    url: '/api/taks',
    data: {
      description: description
    }
  });
}
