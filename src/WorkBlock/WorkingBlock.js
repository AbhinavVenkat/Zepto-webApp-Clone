import React from 'react';
import "./WorkingBlock.css";

function WorkingBlock() {
    return (
        <div className= "outterWorkingDiv">
            <div className="workingBlock">
                <h1 className="workingHeader">How it works</h1>
                <div className="workingFlowBlock">
                    <div className="workingFlowBlockItems">
                        <div className="placeOrderImage"></div>
                        <h1 className="workingFlowMiniHeader">
                            Place an order
                        </h1>
                        <p className="workingFlowPara">
                            Choose from a wide range of daily essentials
                        </p>
                    </div>

                    <div className="workingFlowBlockItems">
                        <div className="blinkImage"></div>
                        <h1 className="workingFlowMiniHeader">
                            Don’t Blink
                        </h1>
                        <p className="workingFlowPara">
                            Our delivery partner will be at your door
                        </p>
                    </div>
                    <div className="workingFlowBlockItems">
                    <div className="enjoyImage"></div>
                        <h1 className="workingFlowMiniHeader">
                        Enjoy
                        </h1>
                        <p className="workingFlowPara">
                        Boom! You'll never have to wait for groceries again
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default WorkingBlock;