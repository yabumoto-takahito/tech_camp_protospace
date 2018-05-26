class Tag < ActiveRecord::Base
  has_many: prototypes, through: protoype_tags
end
