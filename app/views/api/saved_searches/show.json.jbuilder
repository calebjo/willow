json.ignore_nil!

json.saved_search do 
    json.set! saved_search.id do
        json.extract! saved_search, 
            :user_id,
            :min_price,
            :max_price,
            :min_beds,
            :max_beds,
            :min_baths,
            :max_baths,
            :home_type,
            :max_hoa,
            :min_parking_spots,
            :max_parking_spots,
            :min_square_feet,
            :max_square_feet,
            :min_lot_size,
            :max_lot_size,
            :min_year_built,
            :max_year_built,
            :has_basement,
            :num_stories,
            :query
    end
end