class Comment < ActiveRecord::Base
  belongs_to :prototype
  belongs_to :user

  validates :text,
           :prototype_id,
            :user_id,
           presence: true
end
