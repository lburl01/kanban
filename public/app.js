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

// $.ajax({
//   method: 'GET',
//   url: '/api/tasks',
//   dataType: 'json'
// }).done(function(tasks) {
//   var all_tasks = tasks.map(function(task) { return task.name })
//   $tasks.text(all_tasks.join(', '))
// }).fail(function() {
//   console.log('help me')
// })

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
  var name = $taskName.val();
  var mapped_tasks = tasks.map(function(task) {
    var task_item = $( "<li>" ).text( $( name ).text( ) ).get( 0 );
    return task_item
  })
  $tasks.append( mapped_tasks );
})

    // for each task in tasks
    // take each content of task.name
    // append a li
    // to the ul with id "tasks"
