# == Schema Information
#
# Table name: steps
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  done        :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  todo_id     :integer          not null
#
class Step < ApplicationRecord
  validates :title, :description, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo
end
