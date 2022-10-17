import React, { useEffect, useState } from 'react';
import "./DeliveryScrolls.css"
function DeliveryScrolls() {
    
    const [count, setCount] = useState(0);
    // function xCountFunc(count) {
    //     if(count <=2000) {
    //         console.log("if")
    //     setCount(prev => prev+1);
    //     }else if(count >= 2000){
    //         console.log("else")
    //         setCount(prev => prev-prev);
    //     } 
    // }
    function inter() {
        const interval = setInterval(() => {
            
                setCount(prev => {
                    if(prev >= -3000){
                        return prev - 1
                    }else
                        return 0;
                });
           
            
          }, 20);
          return()=>{
              clearInterval(interval);
          }
    }
    // if(count <= 2000 ) {
    //     inter();
    // } else {
    //     setCount(0);
    //     inter();
    // }
    useEffect(() => {
        
            inter();
        
        
    }, []);
    
    return (
       
        <div className="deliveryScrollMainDiv">
            <h1 className="section_heading padding-bottom-20">delivering to</h1>
            <div  className="cmscity_marquee-containter">
                <div className="cmscity_marquee-inner" style={{transform : `translate3d( ${count}px, 0px, 0px)`}} id="test">
                    <div className="div-block-87">
                        <div className="collection-list-wrapper-3 w-dyn-list">
                            <div className="collection-list-4 w-dyn-items">
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/62325218743fb0399e7805f1_brocolli.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Bangalore</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/623251f2f7cdda59d31f103a_chips.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Chennai</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/62325184af68ce2f74064142_egg.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Delhi</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/6232527fe6aa599abaa06624_grape.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Ghaziabad</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/62325208f86a0f47504a4d46_apple.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Gurgaon</h1>
                                    </a>
                                </div>
                                <div role="listitem" className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/6232523c796b8fe32dda4ae8_mango.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Hyderabad</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/6232526fa011c162c1d4caaf_tomato.svg"} alt=""/>
                                            <h1 className="cmscity_city-name">Kolkata</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/6232522cace94b241be52097_orange.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Mumbai</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/6232525d4643e4e0368a423f_cookie.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Noida</h1>
                                    </a>
                                </div>
                                <div className="collection-item-6 w-dyn-item">
                                    <a href="/del-areas" className="link-block-4 w-inline-block">
                                        <img className="cityImage" src={"https://uploads-ssl.webflow.com/612ce9a327af1203dd3b50ef/62325250f08f34b608a5bf6d_avocado.svg"} alt=""/>
                                        <h1 className="cmscity_city-name">Pune</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="missingCity">
                "Is your city missing? Don't worry, we’re" 
                <a href="/del-areas" className="missingCityLink">coming soon</a>
            </div>
        </div>

    );
}

export default DeliveryScrolls;