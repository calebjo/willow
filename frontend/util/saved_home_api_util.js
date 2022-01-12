export const fetchSavedHomes = data => (
    $.ajax({
        method: 'GET',
        url: '/api/saved_homes',
        data
    })
);
  
export const fetchSavedHome = id => (
    $.ajax({
        method: 'GET',
        url: `/api/saved_homes/${id}`
    })
);
  
export const createSavedHome = savedHomeForm => (
    $.ajax({
        method: 'POST',
        url: '/api/saved_homes',
        data: savedHomeForm,
        contentType: false,
        processData: false
    })
);
  
export const updateSavedHome = savedHome => (
    $.ajax({
        method: 'PATCH',
        url: `/api/saved_homes/${savedHome.id}`,
        data: { savedHome }
    })
);

export const deleteSavedHome = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/saved_homes/${id}`
    })
);