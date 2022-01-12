class ChangeSavedSearches < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_searches, :query, :string
  end
end
