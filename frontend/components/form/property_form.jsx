import React from 'react';
import { withRouter } from 'react-router';

class PropertyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // This will be where we create our form data to submit our photo
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    // add our coordinates
    formData.append('bench[lat]', this.coords['lat']);
    formData.append('bench[lng]', this.coords['lng']);

    if (this.state.photoFile) {
      formData.append('bench[photo]', this.state.photoFile);
    }
    // This will fail because we do not have a AWS bucket set up for this project
    // presently. 
    this.props.createBench(formData);
    this.navigateToSearch();
  }

    render() {
        const { description, seating } = this.state;
        const { lat, lng } = this.coords;
        const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

        return (
            <div className="new-bench-container">
            </div>
        );
    }
}

export default withRouter(PropertyForm);
