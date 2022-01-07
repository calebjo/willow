json.extract! user, :id, :email, :screen_name

json.photo_url url_for(user.photo)