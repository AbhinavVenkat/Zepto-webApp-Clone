import React, { Component, useEffect,  useState} from 'react';
import "./MotoBlock.css"


function MotoBlock() {
     
    
    let initialVAl = "Groceries"
    const [GroceryListValue, setGroceryListValue] = useState(initialVAl);
    const groceryList = ["Fruits", "Ice Cream", "Veggies", "Milk", "Snacks", "Groceries"];
    useEffect(() => {
        async function myDisplay(count) {
            let myPromise = new Promise(function(resolve) {
                setTimeout(function() {
                    console.log( groceryList[count]);
                    resolve(groceryList[count])
                    if(!((groceryList[count]) ==='Groceries')){
                        document.getElementById('listOfGroceries').classList = "displayListClass1 restItems";
                        
                    } else {
                        document.getElementById('listOfGroceries').classList.remove("restItems");
                    }
                    ;}, 1000);
              });

            //document.getElementById("listOfGroceries").innerHTML = await myPromise;
            setGroceryListValue(await myPromise);
            count++;
            if(count < groceryList.length) {
                myDisplay(count);
            }
        }
        myDisplay(0);
        setGroceryListValue(initialVAl);
        
        
    },[]);


    const [coords, setCoords] = useState({x: 0, y: 0});

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
          setGlobalCoords({
            x: event.screenX,
            y: event.screenY,
          });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleWindowMouseMove);
        };

        
      }, []);
    
      const handleMouseMove = event => {
        setCoords({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
        });
      };


        return (
            <div className="motoBlockMain">
                <div className = "wordBlock">
                    <div className = "div-block-72"> 
                        <h1 className="displayListClass1" id="listOfGroceries">{GroceryListValue}</h1>
                        {/* <h1 className="displayListClass1">Fruits</h1>
                        <h1 className="displayListClass1">Ice Cream</h1>
                        <h1 className="displayListClass1">Veggies</h1>
                        <h1 className="displayListClass1">Milk</h1>
                        <h1 className="displayListClass1">Snacks</h1> */}
                    </div>
                    <h1 className = "displayListClass2">delivered in 10 minutes
                    <span className="starSpanClass">
                        <sup className="starSupClass">*</sup>
                        </span>
                    </h1>

                    <div className="playstoreIcons">
                        <a href="https://apps.apple.com/in/app/zepto-grocery-delivery/id1575323645" className="appleBadge">

                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.zeptoconsumerapp" className="playstoreBadge">

                        </a>
                    </div>
                </div>

                
                <div className="imageBlockClass" onMouseMove={handleMouseMove} id="imgClassId">                     
                    <div className="groceriesBGimage"></div>
                    <img id="imageId"  style={{transform : `translate3d( ${globalCoords.x/30 }px, ${globalCoords.y/20}px, 0px)`}} src={"https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/6153ba35e289eeae0c121630_groceries.svg"}/> 
                </div> 
                 

               
            </div>
        );
    
}


export default MotoBlock;