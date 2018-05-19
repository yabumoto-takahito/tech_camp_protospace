class RenamePrototypeIdIdColumnToBooks < ActiveRecord::Migration
  def change
    rename_column :prototypes_tags, :prototype_id_id, :prototype_id
    rename_column :prototypes_tags, :tag_id_id, :tag_id
  end
end
