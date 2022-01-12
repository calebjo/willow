if @saved_searches
    @saved_searches.each do |saved_search|
        json.set! saved_search.id do
            json.partial! 'saved_search', saved_search: saved_search
        end
    end
end