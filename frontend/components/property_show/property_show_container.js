import { connect } from 'react-redux';

import { fetchProperties } from "../../actions/property_actions"
import PropertyShow from './property_show';

const mapStateToProps = state => ({
    properties: Object.values(state.entities.properties)
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyShow);