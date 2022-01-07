json.extract! user, :id, :email, :screen_name

if user.photo
    json.photo_url url_for(user.photo)
end