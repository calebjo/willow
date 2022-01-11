import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = (props) => (
    <div>
        <input
            type="number"
            value={props.filters.minPrice}
            onChange={handleChange('minSeating', props.updateFilter)}
        />
        <input
            type="number"
            value={props.filters.maxPrice}
            onChange={handleChange('maxSeating', props.updateFilter)}
        />
    </div>
);

export default FilterForm;