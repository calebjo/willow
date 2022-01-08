import { connect } from 'react-redux';

import { createProperty } from '../../actions/bench_actions';
import PropertyForm from './bench_form';

const mapStateToProps = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
    createProperty: bench => dispatch(createProperty(bench))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyForm);