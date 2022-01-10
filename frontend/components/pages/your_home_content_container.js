import { connect } from 'react-redux';

import { fetchProperties, updateProperty, deleteProperty } from "../../actions/property_actions"
import YourHomeContent from './your_home_content';

const mapStateToProps = (state) => ({
    properties: Object.values(state.entities.properties),
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    updateProperty: (property) => dispatch(updateProperty(property)),
    deleteProperty: (property) => dispatch(deleteProperty(property)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YourHomeContent);