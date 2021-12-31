class ChangeUsers7 < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :screen_name
  end
end
