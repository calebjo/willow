export const selectProperty = ({ properties }, propertyId) => {
    return properties[propertyId] || { reviewIds: [] };
};

export const selectReviewsForProperty = ({ properties, reviews }, property) => {
    return property.reviewIds.map(reviewId => reviews[reviewId]);
};
export const asArray = ({ properties }) => (
    Object.keys(properties).map(key => properties[key])
);