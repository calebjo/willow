class ChangeProperties < ActiveRecord::Migration[6.1]
  def change
    remove_column :properties, :type
  end
end
