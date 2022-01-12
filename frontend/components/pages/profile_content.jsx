import React from "react";

import TopSubNav from "../top_nav/top_sub_nav";

export default class ProfileContent extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){
        return (
            <div className="account-page-wrapper">
                <div className="willow-top-container">
                    <TopSubNav />
                </div>
                <div className="profile-content account-page">
                    <div className="profile-lower">
                        <div className="sub-nav-header">
                            Profile
                        </div>
                        <div className="profile-body">
                            <div className="personal-info">
                                <div className="profile-section-header">
                                    Personal Info
                                </div>
                                <div className="profile-name">

                                </div>
                                <div className="profile-screen">
                                    
                                </div>
                                <div className="profile-photo">
                                    
                                </div>
                                <div className="profile-reviews">
                                    
                                </div>
                            </div>
                            <div className="sign-in-security">
                                <div className="profile-section-header">
                                    Sign in & Security
                                </div>
                                <div className="profile-email">

                                </div>
                                <div className="profile-password">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}