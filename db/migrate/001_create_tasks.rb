require 'active_record'

class CreateTasks < ActiveRecord::Migration[5.0]
  def up
    create_table :tasks do |t|
      t.string :board
      t.string :name
      t.string :description
      t.string :label
      t.boolean :deleted
      t.datetime :created_at
      t.datetime :updated_at
    end

  end

  def down
    drop_table :tasks
  end
end

def main
  action = (ARGV[0] || :up).to_sym

  CreateTasks.migrate(action)

end

main if __FILE__ == $PROGRAM_NAME
