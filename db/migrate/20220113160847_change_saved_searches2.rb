class ChangeSavedSearches2 < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_searches, :title, :string
  end
end
