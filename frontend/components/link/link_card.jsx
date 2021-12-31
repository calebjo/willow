import React from "react";

// SKELETON
export default class LinkCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="link-card">
                {this.props.type} 
            </div>
        );
    }
}