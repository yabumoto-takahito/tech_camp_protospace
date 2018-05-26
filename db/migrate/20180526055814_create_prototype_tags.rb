class CreatePrototypeTags < ActiveRecord::Migration
  def change
    create_table :prototype_tags do |t|
      t.references :prototype_id, foreign_key:true
      t.references :tag_id, foreign_key:true

      t.timestamps null: false
    end
  end
end
