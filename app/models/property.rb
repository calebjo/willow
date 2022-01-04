class Property < ApplicationRecord
    validates :user_id, :address, :price, :bedrooms, :bathrooms, :square_feet, :lot_size, :year_built, :property_type, :num_stories, :parking_spots, :heating, :cooling, :hoa_fee, :description, presence: true
    # validates :user_id, :address, :price, :bedrooms, :bathrooms, :square_feet, :lot_size, :year_built, :property_type, :has_basement, :num_stories, :parking_spots, :heating, :cooling, :hoa_fee, :for_sale, :for_rent, :agent_listing, :description, presence: true
  
    belongs_to :user
      
    # Active Storage Association
    # has_one_attached :photo
end
  