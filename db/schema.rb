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

ActiveRecord::Schema.define(version: 2022_01_13_160847) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.float "lat"
    t.float "lng"
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.string "neighborhood"
    t.index ["address"], name: "index_properties_on_address", unique: true
    t.index ["user_id"], name: "index_properties_on_user_id"
  end

  create_table "saved_homes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "property_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_saved_homes_on_property_id"
    t.index ["user_id", "property_id"], name: "index_saved_homes_on_user_id_and_property_id", unique: true
    t.index ["user_id"], name: "index_saved_homes_on_user_id"
  end

  create_table "saved_searches", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "min_price"
    t.integer "max_price"
    t.integer "min_beds"
    t.integer "max_beds"
    t.integer "min_baths"
    t.integer "max_baths"
    t.string "home_type"
    t.integer "max_hoa"
    t.integer "min_parking_spots"
    t.integer "max_parking_spots"
    t.integer "min_square_feet"
    t.integer "max_square_feet"
    t.integer "min_lot_size"
    t.integer "max_lot_size"
    t.integer "min_year_built"
    t.integer "max_year_built"
    t.boolean "has_basement"
    t.integer "num_stories"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "query"
    t.string "title"
    t.index ["user_id"], name: "index_saved_searches_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
