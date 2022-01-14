
![willow logo](https://i.imgur.com/CGTosdt.png)

Willow is a clone of Zillow, the real estate platform for finding your next home or rental. It was built in 2 weeks and allows users to search for, view, and save properties to their profiles.  

![willow splash page](https://i.imgur.com/WW1RCSj.jpeg)

# Technologies

Willow was built with the following:

## :sparkles: Frontend
* **React**
* **Redux**
* **Javascript**

## :wrench: Backend
* **Ruby**
* **Rails**
* **PostgreSQL**
* **AWS**

## :computer: APIs
* **Google Maps Javascript API**
* **Google Geocoding API**

# Features

## Sign Up or Login to Start a Session
Create your own account or just use the "Demo user" button to quickly access everything Willow has to offer. The user creation form validates that passwords are at least 8 characters and emails are at least 4.  
![willow splash page](https://i.imgur.com/6b0j99l.png)

## Search and Filter for Properties
Search for properties on the splash page or navigate to the map using the provided links. You can search for a specific property or one with the same city, zip code, or state.  
![willow search page](https://i.imgur.com/d4xAXuT.jpeg)

## Save a property
If you find a property that you like, you can save it to your profile by pressing this icon:
![willow like icon](https://i.imgur.com/TcvA9TO.png)  
Then, the property will appear under your **"Saved homes"** in your profile. You can always unsave it if you don't like it anymore.  
![willow saved homes](https://i.imgur.com/gS1ztd9.png)

## Upload a property to Willow
By clicking **"Sell"** in the top menu or splash cards, you can upload a property listing for others to view on Willow.  
![willow upload property](https://i.imgur.com/C68Wckm.png)
Made a mistake in the address form? No problem! Willow will confirm that your address is correct and let you try again if not.  
![willow confirm location page](https://i.imgur.com/yblhjQN.png)
After uploading your property, it will appear under "Your home" under your profile icon in the top right dropdown. You can have multiple homes if you'd like!  
![willow your home page](https://i.imgur.com/1XXh7e9.png)

# Behind the Scenes

## Selling Properties

Willow uses the Google Geocoding API to grab location data and create a property there. This allows you to get the correct location even if you forget to fill out a part of the address form. Cool stuff!  
![willow google geocoding code](https://i.imgur.com/tFgEMOe.png)

## Mobile Responsiveness

Willow was styled mobile-first, and the splash page in particular is completely mobile responsive with appropriate breakpoints for device size!  
![willow media queries](https://i.imgur.com/n2yJrgL.png)
![willow mobile splash page](https://i.imgur.com/ec2dOLT.png)