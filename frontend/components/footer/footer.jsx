import React from "react";

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="footer">
                <div className="footer-links">
                    <div className="footer-link">
                        Real Estate
                    </div>
                    <div className="footer-link">
                        Rentals
                    </div>
                    <div className="footer-link">
                        Mortgage Rates
                    </div>
                    <div className="footer-link">
                        Browse Homes
                    </div>
                </div>
                <div className="footer-greeting">
                    <div className ="greeting-socials">
                        <div className="social-link">
                            <img src={window.githubIcon} />
                        </div>
                        <div className="social-link">
                            <img src={window.linkedinIcon} />
                        </div>
                        <div className="social-link">
                            <img src={window.angellistIcon} />
                        </div>
                        <div className="social-link">
                            <img src={window.portfolioIcon} />
                        </div>
                    </div>
                    <span>
                        I'm <span>Caleb Jones</span>, the developer of this nifty site.
                        <br />
                        I am a <span>full stack software engineer</span> with experience in the full product lifecycle for software.
                        <br />
                        I have an unlimited passion for building products for real people!
                    </span>
                </div>
                <div className="footer-technologies">
                    <div className="technologies-text">
                        Willow was developed with these technologies:
                    </div>
                    <div className="technologies-images">
                        <div className="technology-image">
                            React
                            <img src={window.reactImg} />
                        </div>
                        <div className="technology-image">
                            Redux
                            <img src={window.reduxImg} />
                        </div>
                        <div className="technology-image">
                            Ruby on Rails
                            <img src={window.railsImg} />
                        </div>
                        <div className="technology-image">
                            PostgreSQL
                            <img src={window.psqlImg} />
                        </div>
                        <div className="technology-image">
                            HTML5
                            <img src={window.htmlImg} />
                        </div>
                        <div className="technology-image">
                            CSS3
                            <img src={window.cssImg} />
                        </div>
                    </div>
                </div>
                <div className="footer-banner">
                    <img src={ footerBanner } />
                </div>
            </div>
        );
    }
}