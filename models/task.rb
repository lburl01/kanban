require 'active_record'
require_relative '../db/migrate/001_create_tasks'

class Task < ActiveRecord::Base
  validates :board, :name, :description, :label, presence: true
end
