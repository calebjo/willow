import React from "react";

export default class PropertyShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="search-tab">
                {this.props.type}
            </div>
        );
    }
}