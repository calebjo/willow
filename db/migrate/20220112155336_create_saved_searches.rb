class CreateSavedSearches < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_searches do |t|
      t.integer :user_id, null: false
      t.integer :min_price
      t.integer :max_price
      t.integer :min_beds
      t.integer :max_beds
      t.integer :min_baths
      t.integer :max_baths
      t.string :home_type
      t.integer :max_hoa
      t.integer :min_parking_spots
      t.integer :max_parking_spots
      t.integer :min_square_feet
      t.integer :max_square_feet
      t.integer :min_lot_size
      t.integer :max_lot_size
      t.integer :min_year_built
      t.integer :max_year_built
      t.boolean :has_basement
      t.integer :num_stories

      t.timestamps
    end

    add_index :saved_searches, :user_id
  end
end
