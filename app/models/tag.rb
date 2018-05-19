class Tag < ActiveRecord::Base
  has_many :prototypes, through: PrototypesTag
end
