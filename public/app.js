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
      if (task.deleted == false ) {
        var $li = $('<li>').appendTo($tasks)
        var $span = $('<span>').text(task.name).appendTo($li)
        var $label = $('<span>').text("•").attr('class', task.label).appendTo($li)
        var $delete = $('<button>').text(" X ").addClass('delete').appendTo($li)
        var $p = $('<p>').addClass('task-description').text(task.description).appendTo($li)

        $span.mouseover(function(){
          $p.slideDown();
        }).mouseout(function() {
          $p.slideUp();
        })

        $delete.click(function() {
          $li.remove();

          $.ajax({
            method: 'PUT',
            url: '/api/task/' + task.id
          })
        })
      }
      })
      var allBoards = tasks.map(function(task) { return task.board })
      var uniqueBoards = $.unique(allBoards)
      $boards.empty()
      uniqueBoards.forEach(function(board) {
        $boards.append('<li>' + board + '</li>')})
  })
}, 10000)
//
// var $li = $('<li>').appendTo($boards)
// $('<a>').attr('href', URL).text(board).appendTo($li)
