class ChangeNullableOfColumns < ActiveRecord::Migration
  def change
    change_column :comments, :text, :string, null: false, default: ""
    change_column :comments, :prototype_id, :integer, null: false, default: 0
  end
end
