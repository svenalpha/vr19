import useHelmet from '@hooks/useHelmet';
import React, { useEffect, useState } from 'react';
import axios from "axios"
import   { useWorkoutsContext }    from "../../hooks/useWorkoutsContext";

const Contact: React.FC<ContactProps> = (props) => {
    const [legend, setLegend] = useState("  here is useState original legend");
    const [legend2, setLegend2] = useState("  here is useState original legend pre fetch ");
    const [data, setData] = useState();
    const [datax, setDatax] = useState([]);
    const {workouts, dispatch} = useWorkoutsContext(); 
    const url ="";
    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle("Contact")
    }, [helmet])

    useEffect(() => {
        axios.get('/api/proxy1').then((response) => {         
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                    }
                                      )        
        axios.get('/rrr/doGetSecondExport').then((response) => {    // "/api"     
               //console.log(" useEffect, response data = ",response.data)    
               setLegend2(response.data);
                                                               }
                 )                                         
                                        

                    }, [])     // end useEffect
                    
//function async getDataFromMongo() 
const getDataFromMongo = async () => 
{  //axios.get(url)
   //   .then((res) => setData(res.data))
   //   .catch((err) => {console.error(err);
   //                   });   
   console.log("inside getDataFromMongo");    
   //console.log("in GetWorkouts/getAllWorkouts first line");
   //console.log("url = ",url);  

   await axios.get('/rrr/getMongo').then((response) => {    // "/api"     
    //console.log(" useEffect, response data = ",response.data)    
    if (response.status === 200)   // ie successful   
      {//setDatax(response.data);  
        dispatch({type: "SET_WORKOUTS", payload: response.data});
        //setDatax(response.data);
       console.log("response to getMongo datax = ",datax);
      }
                                                       }
                  )  

      
   //const response = await fetch(url);
   //const json = await response.json();
   //console.log("in getAllWorkouts, response = ",response);
   //if  (response.ok)
   // {//x setWorkouts(json);
   //  console.log("in GetWorkouts, before dispatch is invoked. json =",json);
   //   dispatch({type: "SET_WORKOUTS", payload: json});
   //    console.log("in getAllWorkouts, workouts = ",workouts);     
   // }   



}   //   end const getDataFromMongo = async () => 




    return (
        <>
            <h4>Contact Page</h4>
            <p>{legend}</p>
            <p> legend2 </p>
            <div>
            {
             workouts && Object.values(workouts).map((dat:any) => (
                                    <div key={dat["_id"]}> 
                                       <h6>{dat['title']}    {dat['reps']}   {dat['load']}</h6>
                                     </div>                      
                                             )                                    
                                     )                                                                

            }
         </div> 





         
            <button onClick={() =>(getDataFromMongo())}>Access server using proxy</button>
        </>
    )
}
//onClick={()=>(setDoUpdate(true))}>
interface ContactProps {
    [key: string]: any
}

export default Contact

/*
from vr14
function App() {
    const [data, setData] = useState();
    const urlWithProxy = "/api/v1";
  
    function getDataFromServer() {
      axios
        .get(urlWithProxy)
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error(err);
        });
    }
  
    return (
      <div className="App">
        <h4>    client    no.02       13:04     11/04/2024 </h4>
        <button onClick={getDataFromServer}>Access server using proxy</button>
        <p>data : {data}</p>
      </div>
    );
  }
  
  export default App;
*/  
