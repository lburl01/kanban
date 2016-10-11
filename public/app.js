var $tasks = $('#tasks')
var $boards = $('#boards')

var $taskBoard = $('#board-name')
var $taskName = $('#task-name')
var $taskDescription = $('#task-description')

var $addTaskBtn = $('#add-task')

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

setInterval(function() {
  console.log('hi mom')

  $.ajax({
    method: 'GET',
    url: '/api/tasks',
    dataType: 'json'
  }).done(function(tasks) {
    $tasks.empty()
    tasks.forEach(function(task) {
      $tasks.append('<li>' + task.name + '</li>')})
    var allBoards = tasks.map(function(task) { return task.board })
    var uniqueBoards = $.unique(allBoards)
    $boards.empty()
    uniqueBoards.forEach(function(board) {
      $boards.append('<li>' + board + '</li>')})
  })
}, 5000)
