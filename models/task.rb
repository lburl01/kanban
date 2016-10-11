require 'active_record'

class Task < ActiveRecord::Base
  validates :board, :name, :description, :label, :deleted, presence: true

  before_save :downcase_input

  def downcase_input
    self.board.downcase!
    self.name.downcase!
  end
end
