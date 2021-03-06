import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import MapContent from './map_content';

const mapStateToProps = state => ({
    properties: asArray(state.entities),
    price: state.ui.filters.price,
    bedrooms: state.ui.filters.bedrooms,
    bathrooms: state.ui.filters.bathrooms,
    state
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MapContent));