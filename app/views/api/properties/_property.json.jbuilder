json.extract! property, 
    :id,
    :user_id,
    :address,
    :price,
    :bedrooms,
    :bathrooms,
    :square_feet,
    :lot_size,
    :year_built,
    :has_basement,
    :num_stories,
    :parking_spots,
    :heating,
    :cooling,
    :hoa_fee,
    :for_sale,
    :for_rent,
    :agent_listing,
    :description,
    :created_at,
    :lat,
    :lng

if property.photo
    json.photo_url url_for(property.photo)
end
# json.photos property.photos