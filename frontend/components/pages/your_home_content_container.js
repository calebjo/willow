import { connect } from 'react-redux';

import { fetchProperties } from "../../actions/property_actions"
import YourHomeContent from './your_home_content';

const mapStateToProps = (state) => ({
    properties: Object.values(state.entities.properties),
    state
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YourHomeContent);