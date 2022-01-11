class ChangeProperties3 < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :lat, :float
    add_column :properties, :lng, :float
  end
end
