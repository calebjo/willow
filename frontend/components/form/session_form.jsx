import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.hideModal()
        this.props.processForm(user)
    }

    handleDemoSubmit(e) {
        this.setState({
            email: "demo@dmail.com",
            password: "xc9u0981234n123o"}, () => 
            this.handleSubmit(e)
        )
    }

    hideModal() {
        const modal = document.querySelector(".modal-container")
        modal.classList.add("hidden")
    }

    updateField(type){
        return (e) => this.setState({[type]: e.target.value});
    }
  
    render(){
        const errorList = this.props.errors.map( error => <li key={error}>{error}</li> )
        let placeholderText;
        if ( this.props.formType === "Submit"){
            placeholderText = "Create password"
        } else {
            placeholderText = "Enter password"
        }
        return (
        <div className={this.props.className}>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input 
                        type="text" 
                        value={this.state.email} 
                        placeholder="Enter email"
                        onChange={this.updateField("email")}
                    />
                </label>
                <label>Password
                    <input 
                        type="password" 
                        value={this.state.password} 
                        placeholder={ placeholderText }
                        onChange={this.updateField("password")} 
                    />
                </label>
                { errorList }
                <input type="submit" value={this.props.formType} />
                { this.props.formType === "Sign in" && (
                    <input 
                        type="submit" 
                        value="Demo user"
                        onClick={ this.handleDemoSubmit }
                    />
                )}
            </form>
        </div>
        )
    }
}

export default SessionForm;