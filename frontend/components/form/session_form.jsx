import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateField(type){
        return (e) => this.setState({[type]: e.target.value});
    }
  
    render(){
        const errorList = this.props.errors.map( error => <li key={error}>{error}</li> )
        return (
        <div className="session-form">
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.updateField("email")}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.updateField("password")} />
                </label>
                { errorList }
                <input type="submit" value={this.props.formType} />
            </form>
        </div>
        )
    }
}

export default SessionForm;