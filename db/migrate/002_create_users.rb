# require 'active_record'
#
# class CreateUsers < ActiveRecord::Migration[5.0]
#   def up
#     create_table :users do |t|
#       t.string :name
#       t.datetime :created_at
#       t.datetime :updated_at
#     end
#
#   end
#
#   def down
#     drop_table :users
#   end
# end
#
# def main
#   action = (ARGV[0] || :up).to_sym
#
#   CreateUsers.migrate(action)
#
# end
#
# main if __FILE__ == $PROGRAM_NAME
