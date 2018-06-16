class Prototype < ActiveRecord::Base
  belongs_to :user
  has_many :captured_images, dependent: :destroy
  has_many :prototype_tags
  has_many :tags, through: :prototype_tags

  accepts_nested_attributes_for :captured_images, reject_if: :reject_sub_images
  accepts_nested_attributes_for :tags, allow_destroy: true

  validates :title,
            :catch_copy,
            :concept,
            presence: true

  def tags_attributes=(tag_attributes)
    tag_attributes.values.each do |tag_attribute|
      if tag_attribute[:content].present?
        tag = Tag.find_or_create_by(tag_attribute)
        self.tags << tag
      end
    end
  end

  def reject_sub_images(attributed)
    attributed['content'].blank?
  end

  def set_main_thumbnail
    captured_images.main.first.content
  end

  def posted_date
    created_at.strftime('%b %d %a')
  end
end