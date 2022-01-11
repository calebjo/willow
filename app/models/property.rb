class Property < ApplicationRecord
    validates :user_id, :address, :price, :bedrooms, :bathrooms, :square_feet, :lot_size, :year_built, :property_type, :num_stories, :parking_spots, :heating, :cooling, :hoa_fee, :description, presence: true
  
    belongs_to :user
    # Active Storage Association
    #has_many_attached :photos
    has_one_attached :photo
    
    # return self (a property) only if within the map bounds
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

    # return self (a property) only if it satisfies the location query
    def self.in_query(query)
        #self.where("")
    end

    # return self (a property) only if it satisfies the search filters
    # DEBUG -- DOES NOT ACCEPT EXACT FILTER TYPES
    def self.in_filters(filters)
        self.where("price >= ?", filters[:minPrice])
            .where("price <= ?", filters[:maxPrice])
            .where("bedrooms >= ?", filters[:minBeds])
            .where("bedrooms <= ?", filters[:maxBeds])
            .where("bathrooms >= ?", filters[:minBaths])
            .where("bathrooms <= ?", filters[:maxBaths])
            #.where("property_type = ?", filters[:homeType])
            .where("hoa_fee <= ?", filters[:maxHoa])
            .where("parking_spots >= ?", filters[:minParkingSpots])
            .where("parking_spots <= ?", filters[:maxParkingSpots])
            .where("square_feet >= ?", filters[:minSquareFeet])
            .where("square_feet <= ?", filters[:maxSquareFeet])
            .where("lot_size >= ?", filters[:minLotSize])
            .where("lot_size <= ?", filters[:maxLotSize])
            .where("year_built >= ?", filters[:minYearBuilt])
            .where("year_built <= ?", filters[:maxYearBuilt])
            # .where("has_basement = ?", filters[:hasBasement])
            # .where("num_stories = ?", filters[:numStories])
    end
end
  