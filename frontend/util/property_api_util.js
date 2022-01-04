export const fetchProperties = data => (
    $.ajax({
        method: 'GET',
        url: 'api/properties',
        data
    })
);
  
export const fetchProperty = id => (
    $.ajax({
        method: 'GET',
        url: `api/properties/${id}`
    })
);
  
export const createProperty = propertyForm => (
    $.ajax({
        method: 'POST',
        url: 'api/properties',
        data: propertyForm,
        contentType: false,
        processData: false
    })
);
  