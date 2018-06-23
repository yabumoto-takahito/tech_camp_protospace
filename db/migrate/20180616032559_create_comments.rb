class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :text
      t.references :prototype

      t.timestamps null: false
    end
  end
end
