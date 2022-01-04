class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
        t.integer :user_id, null: false
        t.string :address, null: false
        t.integer :price, null: false
        t.integer :bedrooms, null: false
        t.integer :bathrooms, null: false
        t.integer :square_feet, null: false
        t.integer :lot_size, null: false
        t.integer :year_built, null: false
        t.string :type, null: false
        t.boolean :has_basement, null: false
        t.integer :num_stories, null: false
        t.integer :parking_spots, null: false
        t.string :heating, null: false
        t.string :cooling, null: false
        t.integer :hoa_fee, null: false
        t.boolean :for_sale, null: false
        t.boolean :for_rent, null: false
        t.boolean :agent_listing, null: false
        t.string :description, null: false

        t.timestamps
    end
    add_index :properties, :user_id
    add_index :properties, :address, :unique => true
  end
end
