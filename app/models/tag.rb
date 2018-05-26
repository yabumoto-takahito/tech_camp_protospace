class Tag < ActiveRecord::Base
  has_many: prototypes, through: :prototype_tags
end
