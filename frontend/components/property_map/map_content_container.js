import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
    benches: asArray(state.entities),
    price: state.ui.filters.price,
    bedrooms: state.ui.filters.bedrooms,
    bathrooms: state.ui.filters.bathrooms
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContent);