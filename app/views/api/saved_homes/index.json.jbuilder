if @saved_homes
    @saved_homes.each do |saved_home|
        json.set! saved_home.id do
            json.partial! 'saved_home', saved_home: saved_home
        end
    end
end