class Property < ApplicationRecord
    validates :user_id, :address, :price, :bedrooms, :bathrooms, :square_feet, :lot_size, :year_built, :property_type, :num_stories, :parking_spots, :heating, :cooling, :hoa_fee, :description, presence: true
  
    belongs_to :user
    # Active Storage Association
    #has_many_attached :photos
    has_one_attached :photo
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end
end
  