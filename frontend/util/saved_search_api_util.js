export const fetchSavedSearches = data => (
    $.ajax({
        method: 'GET',
        url: '/api/saved_searches',
        data
    })
);
  
export const fetchSavedSearch = id => (
    $.ajax({
        method: 'GET',
        url: `/api/saved_searches/${id}`
    })
);
  
export const createSavedSearch = saved_search => (
    $.ajax({
        method: 'POST',
        url: '/api/saved_searches',
        data: { saved_search }
    })
);
  
export const updateSavedSearch = saved_search => (
    $.ajax({
        method: 'PATCH',
        url: `/api/saved_searches/${saved_search.id}`,
        data: { saved_search }
    })
);

export const deleteSavedSearch = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/saved_searches/${id}`
    })
);