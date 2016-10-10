require_relative 'models/task'
require_relative 'db/migrate/001_create_tasks'

def main
  ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])

  thing1 = Task.create!(board: 'To Read', name: 'PragProg Bookshelf', description: 'Read all the books', label: 'high')

  thing2 = Task.create!(board: 'To Read', name: '57 Exercises', description: 'Chapter Two', label: 'medium')

  thing3 = Task.create!(board: 'To Eat', name: 'Asian Noodle Salad', description: 'Get recipe; use tofu', label: 'low')

  thing4 = Task.create!(board: 'Shortcuts', name: 'Merge branch to master', description: 'http://stackoverflow.com/questions/5601931/best-and-safest-way-to-merge-a-git-branch-into-master', label: 'high')

  ActiveRecord::Base.connection.close
end

main if __FILE__ == $PROGRAM_NAME
