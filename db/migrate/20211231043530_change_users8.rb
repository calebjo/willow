class ChangeUsers8 < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :screen_name, true
  end
end
