class CreateSavedHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_homes do |t|
        t.integer :user_id, null: false
        t.integer :property_id, null: false
        t.timestamps
    end

    add_index :saved_homes, :user_id
    add_index :saved_homes, :property_id
    add_index :saved_homes, [:user_id, :property_id], unique: true
  end
end
