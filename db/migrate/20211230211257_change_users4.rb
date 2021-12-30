class ChangeUsers4 < ActiveRecord::Migration[6.1]
  def change
    add_index :users, :email, unique: true
    add_index :users, :screen_name, unique: true
  end
end
