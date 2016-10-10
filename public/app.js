var $tasks = $('#tasks')

var $taskBoard = $('#board-name')
var $taskName = $('#task-name')
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
  var board = $taskBoard.val();
  var name = $taskName.val();
  var priority = $('[name=priority]:checked').val();

  return $.ajax({
    method: 'POST',
    url: '/api/task',
    data: {
      board: board,
      name: name,
      description: description,
      priority: priority
    }
  });
}
