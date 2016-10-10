require 'active_record'
require '001_create_tasks'

class Task < ActiveRecord::Base
  validates :board, :name, :description, :label, presence: true
end
