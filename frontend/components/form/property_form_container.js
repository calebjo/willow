import { connect } from 'react-redux';

import { createProperty } from '../../actions/property_actions';
import EditSellContent from '../pages/edit_sell_content';

const mapStateToProps = (state, ownProps) => ({
    redirect: ownProps.redirect,
    currentUser: state.session,
    state
});

const mapDispatchToProps = dispatch => ({
    createProperty: property => dispatch(createProperty(property))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSellContent);