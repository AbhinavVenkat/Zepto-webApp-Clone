import "./CustRev.css";
import React from 'react';

function CustomerRev(props) {
    return (
        <div className="custRev">
            <h1> HAPPY CUSTOMERS </h1>
            <div className = "reviewBlockFull">
                <div className="custReviewBlock">
                    <div className="reviewList">
                        <div id="listItem1" className="listItem">
                            <blockquote className="blockQuoteClass">
                                Impressed with the overall experience. Placed an order on Zepto right after booking a cab. The order arrived faster than the cab!!
                            </blockquote>
                            <div className ="custName">- Guruwinder</div>
                        </div>
                        <div id="listItem2" className="listItem">
                            <blockquote className="blockQuoteClass">
                            I no longer have to plan in advance for my groceries. This service helps me order on-the-fly. 10 minute delivery is just insane
                            </blockquote>
                            <div className ="custName">- Akshat</div>
                        </div>
                        <div id="listItem3" className="listItem">
                            <blockquote className="blockQuoteClass">
                                This service is unbelievably fast. And their product assortment is great!
                            </blockquote>
                            <div className ="custName">- Ragini</div>
                        </div>
                        <div id="listItem4" className="listItem">
                            <blockquote className="blockQuoteClass">
                                Thank you for being an absolute saviour. Best app for when you need something INSTANTLY
                            </blockquote>
                            <div className ="custName">- Aishwarya</div>
                        </div>
                        <div id="listItem4" className="listItem">
                            <blockquote className="blockQuoteClass">
                                You have to try it to believe it. No false promises here. Absolutely love this app
                            </blockquote>
                            <div className ="custName">- Ankith</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerRev;