json.ignore_nil!

json.saved_search do 
    json.partial! 'api/saved_searches/saved_search', saved_search: @saved_search
end