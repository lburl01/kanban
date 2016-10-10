$.ajax({
  method: 'GET',
  url: '/api/tasks',
  dataType: 'json'
}).done(function(tasks) { // when this request is done, execute this function:
  $name.text(tasks)
  console.log(tasks) // prints the full object to the console
}).fail(function() {
  console.log('help me')
})

var $tasks = $('#tasks')
