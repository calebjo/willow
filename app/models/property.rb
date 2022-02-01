class Property < ApplicationRecord
    validates :user_id, :address, :price, :bedrooms, :bathrooms, :square_feet, :lot_size, :year_built, presence: true
    validates :property_type, :num_stories, :parking_spots, :heating, :cooling, :hoa_fee, :description, presence: true
  
    belongs_to :user
    has_many :saved_homes
    # Active Storage Association
    # has_many_attached :photos
    has_one_attached :photo
    
    # return self (a property) if within the map bounds
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

    # return self (a property) if part of its address matches a part of the query
    def self.in_query(query)
        self.where("LOWER(address) LIKE ?", "%#{query.downcase}%")
            .or(where("LOWER(city) LIKE ?", "%#{query.downcase}%")) 
            .or(where("LOWER(state) LIKE ?", "%#{query.downcase}%")) 
            .or(where("CAST(zip_code AS TEXT) LIKE ?", "%#{query}%"))
    end

    # return self (a property) if it satisfies the search filters
    # DEBUG -- DOES NOT ACCEPT EXACT FILTER TYPES
    def self.in_filters(filters)
        property = self.where("price >= ?", filters[:min_price])
            .where("price <= ?", filters[:max_price])
            .where("bedrooms >= ?", filters[:min_beds])
            .where("bedrooms <= ?", filters[:max_beds])
            .where("bathrooms >= ?", filters[:min_baths])
            .where("bathrooms <= ?", filters[:max_baths])
            .where("hoa_fee <= ?", filters[:max_hoa])
            .where("parking_spots >= ?", filters[:min_parking_spots])
            .where("parking_spots <= ?", filters[:max_parking_spots])
            .where("square_feet >= ?", filters[:min_square_feet])
            .where("square_feet <= ?", filters[:max_square_feet])
            .where("lot_size >= ?", filters[:min_lot_size])
            .where("lot_size <= ?", filters[:max_lot_size])
            .where("year_built >= ?", filters[:min_year_built])
            .where("year_built <= ?", filters[:max_year_built])

        if filters[:home_type]
            property = property.where("property_type = ?", filters[:home_type])
        end

        if filters[:has_basement]
            property = property.where("has_basement = ?", filters[:has_basement])
        end
        
        if filters[:num_stories]
            property = property.where("num_stories = ?", filters[:num_stories])
        end

        if filters[:for_sale]
            property = property.where("for_sale = ?", filters[:for_sale])
        end

        if filters[:for_rent]
            property = property.where("for_rent = ?", filters[:for_rent])
        end
        
        property
    end
end
  