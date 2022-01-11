# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Property.delete_all
User.delete_all

property_descriptions = [
    "As soon as you walk into this Fairview home you will be struck by the open space and clean lines - the perfect canvas on which to create your dream home. Substantially renovated with many sparkling clean features, this suite is in a concrete and steel, pet friendly, family building in a convenient downtown location. With 1 baths, 2BRs up and a fantastic rec room plumbed for a wet bar down plus a large single car garage this home offers excellent value and utility while also offering a family oriented tight knit community to call home. This 'as new' home is rich with heritage features, boasting an open contemporary design with all the modern conveniences. Beautiful Gibraltar Model enhanced by 36'x 17' Screened Patio with beautiful travertine floor adding natural richness & a unique appearance to the patio. Located in-town, adjacent to North Park, for an eco-friendly walk everywhere lifestyle. Located at the end of a quiet cul-de-sac and backing onto a regional trail system and green belt, this bright and sunny property has been fenced and cross fenced, is currently home to sheep and chickens and easily adapted for horses. In great condition with many character features including large commercial grade low E windows, fully developed attic area and drive in garage with workshop area. Call Now!",
    "Great Opportunity to get into the real estate market for less than the cost of Rent!! Beautifully suited to entertaining, this home delivers the very best of warm,period charm & superior upgrading. A traditional floorplan with 2 superb bedroom/1 bathroom and a spacious Rec Room w/wet bar above the garage. Needs some updating has all impact windows newer roof! Could be an excellent investment opportunity or a good place to call home while attending university. Located on a quiet cul de sac and backing onto Point Grey with trail access only steps away. There is a large double car garage at the south end as well as a large workshop attached at the north which could be redeveloped into your home office or studio. Features include White Cabinetry/Granite counters, private deck overlooking the back yard and park & inlayed oak and fir floors plus potential for a mortgage helper on the lower level. And in moments you can walk to downtown, to the seaside.",
    "Here's an unbeatable opportunity to get into the market at a stunning price. Bathed in sunlight from lots of windows, skylights & vaulted ceiling, you will be impressed the moment you enter. Over 1,100 sq ft of living space which includes 2 beds and 1 bathrooms. Don't miss this opportunity This home is only accepting cash and is a short sale with limited time! The strata is well run; the building was remediated in 2008 (new roof as well). Walking distance to everything. On the lower level is a great nanny or inlaw suite ready to go. The long-time resident has created an appealing ambience that blends the best of period detail with smart, recent upgrades including hardwood & tile floors, electric blinds, granite counters, w/w carpet throughout the residence and plenty of storage. Exceptional original construction and impossible to replace at this price.",
    "A truly remarkable property nestled at the end of a cul-de-sac in Mouat Park. Available for immediate occupancy for you or your tenant, this Art Deco/Moderne building has been beautifully preserved, offering style & charm that is simply impossible to find anywhere else in the city. An ideal 2BR, 1 bath home in a convenient village location. Extremely efficient home with R50 insulation helps cut down on hydro bills & reduce/remove street noise. Opportunity abounds with the untapped potential of two office areas on the ground floor for future expansion. Buses, church, shopping, all amenities close by. Just enough garden space so you can enjoy your own flower beds & veggies - and there's a covered patio for morning coffee. Wide hallways, secured underground parking, 9' ceilings, large family/entertainment room, feature wall unit w/fireplace and granite island. Move in for Christmas!",
    "Brand new, modern home with HEAT PUMP!! Set on a private, southwest corner of a well managed complex in the heart of vibrant Oak Bay, A commanding presence greets with most pleasant curb appeal. Spacious kitchen and living areas, 4 peaceful bedrooms and 5 bathrooms all renovated to the highest standards. Small dog (under 15 lbs) or cat. 2 inch blinds & Black appliances, secure underground parking & storage. It is ideally situated on a very private lot along a whisper quiet street. Main drive is newly paved & leads to a NEW very affordable detached garage w R/I living space loft. It keeps coming... gorgeous floor to ceilings windows to allow plenty of natural lighting, crafting room, daylight walkout lower level & separate drive in workshop and hard surface counter-tops. A large double garage, plenty of storage in the crawl space and a manicured yard make this the move in and worry free home you have been looking for!"
]

property_data = [
    {
        user_id: 1,
        address: "159 Montecito Ave, Oakland, CA 94610",
        price: 650000,
        bedrooms: 4,
        bathrooms: 3,
        square_feet: 2200,
        lot_size: 4100,
        year_built: 2005,
        property_type: "house",
        has_basement: true,
        num_stories: 2,
        parking_spots: 4,
        heating: "Forced air, zoned, natural gas",
        cooling: "Central a/c, zoned, electric",
        hoa_fee: 200,
        for_sale: true,
        for_rent: false,
        agent_listing: false,
        description: property_descriptions[0],
        lat: 37.8119204,
        lng: -122.2593021
    },
    {
        user_id: 2,
        address: "3909 Lakeshore Ave, Oakland, CA 94610",
        price: 450000,
        bedrooms: 2,
        bathrooms: 1,
        square_feet: 2200,
        lot_size: 4100,
        year_built: 2001,
        property_type: "house",
        has_basement: true,
        num_stories: 1,
        parking_spots: 2,
        heating: "Contact manager",
        cooling: "Contact manager",
        hoa_fee: 0,
        for_sale: true,
        for_rent: false,
        agent_listing: false,
        description: property_descriptions[1],
        lat: 37.8157803,
        lng: -122.2374451
    },
    {
        user_id: 3,
        address: "2525 Benvenue Ave, Berkeley, CA 94704",
        price: 835000,
        bedrooms: 6,
        bathrooms: 5,
        square_feet: 3800,
        lot_size: 12300,
        year_built: 1945,
        property_type: "house",
        has_basement: true,
        num_stories: 3,
        parking_spots: 6,
        heating: "Forced air, heat pump, eletric",
        cooling: "Central a/c, electric",
        hoa_fee: 300,
        for_sale: true,
        for_rent: false,
        agent_listing: false,
        description: property_descriptions[2],
        lat: 37.8645572,
        lng: -122.2551291
    },
    {
        user_id: 4,
        address: "2721 Belrose Ave, Berkeley, CA 94705",
        price: 2400,
        bedrooms: 4,
        bathrooms: 3,
        square_feet: 1700,
        lot_size: 1700,
        year_built: 1990,
        property_type: "apartment",
        has_basement: true,
        num_stories: 2,
        parking_spots: 2,
        heating: "Forced air, natural gas",
        cooling: "Central a/c, electric",
        hoa_fee: 0,
        for_sale: false,
        for_rent: true,
        agent_listing: false,
        description: property_descriptions[3],
        lat: 37.8616969,
        lng: -122.245935
    },
    {
        user_id: 5,
        address: "1822 63rd St, Berkeley, CA 94703",
        price: 1200,
        bedrooms: 2,
        bathrooms: 1,
        square_feet: 800,
        lot_size: 800,
        year_built: 2008,
        property_type: "apartment",
        has_basement: false,
        num_stories: 1,
        parking_spots: 1,
        heating: "Forced air",
        cooling: "Central",
        hoa_fee: 0,
        for_sale: false,
        for_rent: true,
        agent_listing: false,
        description: property_descriptions[4],
        lat: 37.8479992,
        lng: -122.2700971
    }
]

demo = User.create!(email: "demo@dmail.com", password: "xc9u0981234n123o")
file = open('https://s3.amazonaws.com/willow-aa-seeds/heman.png')
demo.photo.attach(io: file, filename: 'heman.png')

mario = User.create!(email: "mario@dmail.com", password: "mariomario101")
file = open('https://s3.amazonaws.com/willow-aa-seeds/mario.png')
mario.photo.attach(io: file, filename: 'mario.png')

luigi = User.create!(email: "luigi@dmail.com", password: "luigiluigi101")
file = open('https://s3.amazonaws.com/willow-aa-seeds/luigi.png')
luigi.photo.attach(io: file, filename: 'luigi.png')

peach = User.create!(email: "peach@dmail.com", password: "peachpeach101")
file = open('https://s3.amazonaws.com/willow-aa-seeds/peach.png')
peach.photo.attach(io: file, filename: 'peach.png')

bowser = User.create!(email: "bowser@dmail.com", password: "bowserbowser101")
file = open('https://s3.amazonaws.com/willow-aa-seeds/bowser.png')
bowser.photo.attach(io: file, filename: 'bowser.png')

# -------------------------------------

p1 = Property.create!(property_data[0])
file = open('https://s3.amazonaws.com/willow-aa-seeds/1.jpg')
p1.photo.attach(io: file, filename: '1.jpg')

p2 = Property.create!(property_data[1])
file = open('https://s3.amazonaws.com/willow-aa-seeds/2.jpg')
p2.photo.attach(io: file, filename: '2.jpg')

p3 = Property.create!(property_data[2])
file = open('https://s3.amazonaws.com/willow-aa-seeds/3.jpg')
p3.photo.attach(io: file, filename: '3.jpg')

p4 = Property.create!(property_data[3])
file = open('https://s3.amazonaws.com/willow-aa-seeds/4.jpg')
p4.photo.attach(io: file, filename: '4.jpg')

p5 = Property.create!(property_data[4])
file = open('https://s3.amazonaws.com/willow-aa-seeds/5.jpg')
p5.photo.attach(io: file, filename: '5.jpg')
