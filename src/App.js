import React from 'react';
import "./App.css";
import Background from "./Background";
 import Example3 from './Example3';

const App =()=> {

        return (
            <div className="app" >
               <Background/>
				<Example3/>
            </div>
        );
    }

export default App;








// https://www.golangprograms.com/display-json-data-in-reactjs.html


           //style={{ 
                //fonctionne 
               // backgroundImage:  `url("https://via.placeholder.com/500")` ,
            //fonctionne pas 
               //  backgroundImage: `url("http://localhost:3000/background.png")` ,
      //      backgroundImage:  "url(" + background + ")" ,
        //    backgroundImage:  `url(${background})` ,
     //   backgroundImage:  `url("${background}")` ,

           // backgroundRepeat: 'no-repeat',
          //  width:'500px',
          //  height:'300px'
          //   }}