var $tasks = $('#tasks')
var $boards = $('#boards')

var $taskBoard = $('#board-name')
var $taskName = $('#task-name')
var $taskDescription = $('#task-description')

var $addTaskBtn = $('#add-task')

$("#toggle-task").on('click', function() {
   $("#add-task-toggle").toggle();
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

setInterval(function() {
  $.ajax({
    method: 'GET',
    url: '/api/tasks',
    dataType: 'json'
  }).done(function(tasks) {
    $tasks.empty()
    tasks.forEach(function(task) {
      var $li = $('<li>').text(task.name).appendTo($tasks)
      var $label = $('<span>').text("•").attr('class', task.label).appendTo($li)
      var $p = $('<p>').text(task.description).appendTo($li)

    // $li.click(function(){
    //   $("#toggle-task").on('click', function() {
    //      $("#add-task-toggle").toggle();
    //   })
    // })
    })
    var allBoards = tasks.map(function(task) { return task.board })
    var uniqueBoards = $.unique(allBoards)
    $boards.empty()
    uniqueBoards.forEach(function(board) {
      $boards.append('<li>' + board + '</li>')})
  })
}, 5000)
//
// var $li = $('<li>').appendTo($boards)
// $('<a>').attr('href', URL).text(board).appendTo($li)
