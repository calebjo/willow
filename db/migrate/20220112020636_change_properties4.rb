class ChangeProperties4 < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :city, :string, null: false
    add_column :properties, :state, :string, null: false
    add_column :properties, :zip_code, :integer, null: false
    add_column :properties, :neighborhood, :string
  end
end
