import React from 'react';
import "./FooterSection.css"

function FooterSection() {
    return (
        <div className="footerSec">
            <div class="div-block-27">
                <img className="zeptoFooterImage" src="https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/60d63a5e002c46ace40429f6_logo.svg" loading="lazy" width="120" alt="Zepto Logo" />

            </div>
                <div className="footerDisplay">
                    <div className="headerList">
                        <a className="listContent">Home</a>
                        <a className="listContent">Delivery Areas</a>
                        <a className="listContent">Careers</a>
                        <a className="listContent">Customer Support</a>
                        <a className="listContent">Press</a>
                    </div>
                    <div className="socialMedia_Footer">
                        <a className="instagram_footer">Instagram</a>
                        <a className="facebook_footer">Facebook</a>
                        <a className="twitter_footer">Twitter</a>
                        <a className="linkedIn_footer">LinkedIn</a>
                        <a className="listContent empty_footer">.</a>

                    </div>
                </div>
            </div>
    );
}

export default FooterSection;