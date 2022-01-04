class ChangeProperties2 < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :property_type, :string, null: false
  end
end
