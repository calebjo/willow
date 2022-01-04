# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_04_164021) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "properties", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "address", null: false
    t.integer "price", null: false
    t.integer "bedrooms", null: false
    t.integer "bathrooms", null: false
    t.integer "square_feet", null: false
    t.integer "lot_size", null: false
    t.integer "year_built", null: false
    t.boolean "has_basement", null: false
    t.integer "num_stories", null: false
    t.integer "parking_spots", null: false
    t.string "heating", null: false
    t.string "cooling", null: false
    t.integer "hoa_fee", null: false
    t.boolean "for_sale", null: false
    t.boolean "for_rent", null: false
    t.boolean "agent_listing", null: false
    t.string "description", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "property_type", null: false
    t.index ["address"], name: "index_properties_on_address", unique: true
    t.index ["user_id"], name: "index_properties_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "screen_name"
    t.string "name"
    t.string "email", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
