import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import { useLocation } from 'react-router-dom'; 
import axios from "axios";
import  Cookies  from "js-cookie";   
import { doCheckToken } from "../../utils/checkToken";
import  jwt   from "jsonwebtoken"; 

const About: React.FC<AboutProps> = (props) => {
    const [datax,setDatax] = useState(); 
    const [users,setUsers] = useState([]); 
    const [result,setResult] = useState("");  
    const [legend,setLegend] = useState();  
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);
    const [legend2,setLegend2] = useState("undecided");

    const navigate = useNavigate();
    //const url = "/rrr/peopleapi";  


/*AA*/   
var  res2 : any;
var  res3 : any;
var res4 : any
var res9 : any;
var resA : any;
//const location = useLocation(); 
//const lp = location.pathname;  // just to make it shorter
//console.log("inside About/lp = ",lp); 
//if (lp==="/about")// || lp==="/contact" || lp==="/extra" )  //  || lp==='auxiliary')   // ie restricted access pages


    //async function  doCheck(token:any)
    //{console.log("in About doCheck");
    //    
    // try{ 
    // await axios.post('/rrr/doJwtVerify',{token})  
    // //console.log("in About doCheck POST successful doJwtVerify"); 
    //               {console.log("axios.post success"); 
    //                res2 = "verified"; 
    //                console.log("inside useLayoutEffect SUCCESS , POST doCheck   res2 = ",res2);
    //                return res2;  
    //               }                 
    //    }catch(err:any){console.log("token exists but is invalid.err.message = ",err.message); 
    //                    res2 = "unverified";  
    //                    console.log("inside useLayoutEffect CATCH, POST doCheck   res2 = ",res2);   
    //                     return res2;                                          
    //                   }  
    // //console.log("inside useLayoutEffect post try/catch, POST doCheck   res2 = ",res2); 
    //  // if (res2 != "verified") navigate('/login',{replace: true});
    // 
    //                                                             
    //}  //   async function  doCheck(token:any)  

   const theReturn =  async () =>
        { console.log("About.tsx theReturn");  //const navigate = useNavigate();
          console.log("About.tsx theReturn, PRE doCheckToken, res4 = ",res4); 
          res4   =   await doCheckToken();
          setLegend2(res4);    
          console.log("About.tsx theReturn, POST doCheckToken, res4 = ",res4); 
          if (res4 !== "verified")    navigate('/login',{replace: true});  
          //return res7;
          
         //      res4="asd";
         //   doCheckToken().then((resA:any) => {//res9 = resx; 
         //                                   console.log("theReturn result a, resA,res4 = ",resA,res4);  
         //                                   setLegend2(resA);  //return res9;
         //                                     });
          

        } 

    useLayoutEffect(() =>
        {console.log("in About / useLayoutEffect ");                                                                          
          
        theReturn();  
        //console.log("in About / useLayoutEffect  res5 =",res5);  
        /*MM 
         
          //theHolder(); 
         //.then((res8) => {console.log("in useLayoutEffect  res8 = ",res8);});
         //console.log("useLayoutEffect  result, res8 = ",res8);  
         //theReturn().then((res9: any)=>{console.log("in useLayoutEffect, theReturn resp.status = ",res9.status);    
         //                               //console.log("in useLayoutEffect, theReturn resp.value = ",res3.value);       
         //                              }
         //                );
         //var res4 : any  = doCheckToken();

// here
         //doCheckToken().then((resx:any) => {//res9 = resx; 
         //                                   console.log("doCheckToken result, resx = ",resx);  
         //                                  }    
         //                   );


         //console.log("doCheckToken result, res9 = ",res9);  
         
            //zz const token:any = Cookies.get("jwt");   //Cookies.
        //zz console.log("inside useLayoutEffect, PRE doCheck, token = ",token); 
        // const tokenx : any = token;  
       //const result = 
       //const resx = 
       //zzif (token) {doCheck(token);
       //zz           } else 
       //zz           {console.log("in About / useLayoutEffect token inexistant");
       //zz             navigate('/login',{replace: true});
       //zz           }    

      //const inPost = "inPost elephant";
      //const inPost2 = "inPost2 gazelle";
      //axios.post('/rrr/doJwtVerify',{token}).then((response) => {    // "/api"     
          //console.log(" useLayoutEffect, in rrr/doJwtVerify = ",response.data);   
          //setLegend2(response.data);                           
      //                                                                 }                  
      //                                                  )   
      //console.log("inside About.tsx, after all processes pre final judgement.  res4 = ",res4); 
      //if (res4 === "inexistant" || res4 === "unverified") navigate('/login',{replace: true});
      //if (res4 !== "verified")    navigate('/login',{replace: true});  
      MM*/
        },[]        );  //   end  useLayoutEffect(() =>                                                
/* AA*/


        
    const helmet = useHelmet();

    async function  doGetDatax()
        {


        
            //axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            // setUsers(response.data);
            // console.log("users = ",users);
            //                                              }
            //                                )               
            
        axios.get('/rrr/users').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setUsersArray(response.data);
            console.log("userArray = ",usersArray);
                                                   }
                                    )          

 
        axios.get('/rrr/folks').then((response) => {    // "/api"     
            console.log(" useEffect, response data = ",response.data)    
            setFolksArray(response.data);
            console.log("folksArray = ",folksArray);
                                                   }
                                    )          



            axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setLegend(response.data);
                                                            }
                                            )     

            



        }   //       async function  doGetDatax()
        useEffect(() => {doGetDatax()},[]);

    
    useEffect(() => {
        helmet.setTitle("About")
    },[helmet])

    return (
        <>
            <h1>About Us</h1>
            <p>legend = {legend}</p>
            <p>legend2 = {legend2}</p>

            <div>
            {
            folksArray.map(folk => (
                                    <div key={folk["id"]}> 
                                       <h6>{folk['name']}      {folk['star']}</h6>
                                     </div>  
                                   )         
                          )                 

              }
         </div> 

         <div>
            {
            usersArray.map(user => (
                                    <div key={user["id"]}> 
                                       <h6>{user['username']}      {user['city']}</h6>
                                     </div>  
                              )         
                      )                 

              }
         </div> 

            <p>qwwwertyuiogggggghhjhhjjkkll</p>
        </>
    )
}

interface AboutProps {
    [key: string]: any
}

export default About;