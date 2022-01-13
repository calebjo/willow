import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createProperty } from '../../actions/property_actions';
import EditSellContent from '../form/edit_sell_content';

const mapStateToProps = (state, ownProps) => ({
    redirect: ownProps.redirect,
    currentUser: state.session,
    city: ownProps.city,
    state: ownProps.state,
    zip_code: ownProps.zip_code,
    state
});

const mapDispatchToProps = dispatch => ({
    createProperty: property => dispatch(createProperty(property))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSellContent));