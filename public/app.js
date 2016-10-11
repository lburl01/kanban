var $tasks = $('#tasks')
var $boards = $('#boards')

var $taskBoard = $('#board-name')
var $taskName = $('#task-name')
var $taskDescription = $('#task-description')

var $addTaskBtn = $('#add-task')

$.ajax({
  method: 'GET',
  url: '/api/tasks',
  dataType: 'json'
}).done(function(tasks) { // when this request is done, execute this function:
  var all_boards = tasks.map(function(task) { return task.board })
  var unique_boards = $.unique(all_boards)
  // var taskNames = tasks.map(function(task) { return task.name })
  $boards.text(unique_boards.join(', '))
}).fail(function() {
  console.log('help me')
})

$("#add-task").on('click', function createTask() {
  var description = $taskDescription.val();
  var board = $taskBoard.val();
  var name = $taskName.val();
  var label = $('[name=label]:checked').val();

  $('#task-description').val('');
  $('#board-name').val('');
  $('#task-name').val('');

  return $.ajax({
    method: 'POST',
    url: '/api/task',
    data: {
      board: board,
      name: name,
      description: description,
      label: label
    }
  })
})

$.ajax({
  method: 'GET',
  url: '/api/tasks',
  dataType: 'json'
}).done(function(tasks) {
  tasks.map(function(task) {
    $tasks.append('<li>' + task.name + '</li>')})
})
