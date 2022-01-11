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
    def.self.satisfies_filters(filters)
        self.where("price >= ?", filters[:minPrice])
        self.where("price <= ?", filters[:maxPrice])
        self.where("bedrooms >= ?", filters[:minBeds])
        self.where("bedrooms <= ?", filters[:maxBeds])
        self.where("bathrooms >= ?", filters[:minBaths])
        self.where("bathrooms <= ?", filters[:maxBaths])
        self.where("home_type == ?", filters[:homeType])
        self.where("hoa_fee <= ?", filters[:maxHoa])
        self.where("parking_spots >= ?", filters[:minParkingSpots])
        self.where("parking_spots <= ?", filters[:maxParkingSpots])
        self.where("square_feet >= ?", filters[:minSquareFeet])
        self.where("square_feet <= ?", filters[:maxSquareFeet])
        self.where("lot_size >= ?", filters[:minLotSize])
        self.where("lot_size <= ?", filters[:maxLotSize])
        self.where("year_built >= ?", filters[:minYearBuilt])
        self.where("year_built <= ?", filters[:maxYearBuilt])
        self.where("has_basement == ?", filters[:hasBasement])
        self.where("num_stories == ?", filters[:numStories])
    end
end
  