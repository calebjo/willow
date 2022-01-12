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
  
export const createSavedSearch = savedSearchForm => (
    $.ajax({
        method: 'POST',
        url: '/api/saved_searches',
        data: savedSearchForm,
        contentType: false,
        processData: false
    })
);
  
export const updateSavedSearch = savedSearch => (
    $.ajax({
        method: 'PATCH',
        url: `/api/saved_searches/${savedSearch.id}`,
        data: { savedSearch }
    })
);

export const deleteSavedSearch = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/saved_searches/${id}`
    })
);