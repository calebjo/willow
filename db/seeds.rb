# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "demo@dmail.com", password: "xc9u0981234n123o")

property_data = [
    {
        user_id: 1,
        address: "2108 Ferret St, Bogglington, AZ, 85011",
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
        description: "Live the life of luxury in the high desert! Beautiful city views and plenty of space."
    },
    {
        user_id: 1,
        address: "808 Beats Dr, Producersville, CA, 90101",
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
        description: "Location, location location! Viewings are being scheduled RIGHT NOW for this modern central townhouse."
    },
    {
        user_id: 1,
        address: "4001 John Pl, Williamsville, WI, 29108",
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
        description: "Ever wanted to own your own piece of paradise? Situated in the desirable Lorem Ipsum area, this beautiful victorian might be just what you need."
    },
    {
        user_id: 1,
        address: "12 Broccoli St, Vegetonia, OR, 30129",
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
        description: "Eat your vegetables."
    },
    {
        user_id: 1,
        address: "9317 Huntington Blvd, Castro Valley, CA, 94546",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare iaculis velit et mattis. In dignissim urna eu metus tristique, vitae varius magna maximus."
    }
]

property_data.each do |property|
    Property.create!(property)
end