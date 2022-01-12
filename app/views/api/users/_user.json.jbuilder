json.extract! user, :id, :email, :screen_name, :saved_homes, :saved_searches

if user.photo
    json.photo_url url_for(user.photo)
end