class ChangeUsers5 < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :session_token
  end
end
