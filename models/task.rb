require 'active_record'

class Task < ActiveRecord::Base
  validates :board, :name, :description, :label, presence: true

  before_save :downcase_input

  def downcase_input
    self.board.downcase!
    self.name.downcase!
  end

  after_initialize :defaults, unless: :persisted?

  def defaults
    self.deleted ||= false # will set the default value only if it's nil
  end
end
end
