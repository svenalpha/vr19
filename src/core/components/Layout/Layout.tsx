import React, { useLayoutEffect,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import requireAuth from "../../authRoutes";  
import { useNavigate } from 'react-router-dom';  
import { useLocation } from 'react-router-dom';  
import  Cookies  from "js-cookie"; 
import axios from "axios";   
import ExecutionEnvironment from "exenv";
//import bcrypt from 'bcrypt';
//import  jwt   from "jsonwebtoken";     // app.use(authRoutes);   ?   
//import { cookieParser } from "cookie-parser";   
//import   cookieParser  from "cookie-parser";  
//import cookieParser from "cookie-parser"; 
// import  requireAuth  from "../../../../server/middleware/authMiddleware";


import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = (props) => {
    const navigate = useNavigate();
   //console.log("in Layout , props = ",props); 
   //const location = useLocation();  
   //console.log("in Layout , location = ",location); 
   //console.log("in Layout , location.pathname = ",location.pathname); 
   //if (location.pathname == "/contact") location.state = "qwerty";
   //console.log("in Layout , location = ",location);
    
   //if (jwt)  console.log("in Layout , jwt is true"); else  console.log("in Layout , jwt is false");   
   //if (token)  console.log("in Layout , token is true"); else  console.log("in Layout , token is false"); 
   //console.log("in Layout , jwt = ",jwt);
   //req.cookies.
 /*ZZ  
 async function  doCheck(token:any)
 {console.log("in Layout doCheck");
  const tokenx : any = token;  
  try{ 
  await axios.post('/rrr/jwt_auth_post',{tokenx})
     }catch(err){
                } 
 }  //   async function  doCheck(token:any)
ZZ*/
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*BB
if (typeof window === 'undefined')
    {console.log("in Layout , typeof window IS UNdefined");
    }
    if (typeof window !== 'undefined')
        {//const xxx :any = "jwt=";
         console.log("in Layout , typeof window IS NOT undefined");
        }

var  res2 : any;
var  res3 : any;
async function  doCheck(token:any)
    {console.log("in Layout doCheck");
        
     try{ 
     await axios.post('/rrr/doJwtVerify',{token})  
     //console.log("in About doCheck POST successful doJwtVerify"); 
                   {console.log("axios.post success"); 
                    res2 = "verified"; 
                    console.log("doCheck axios.post SUCCESS , POST doCheck   res2 = ",res2);
                   }                 
        }catch(err:any){console.log("doCheck token exists but is invalid.err.message = ",err.message); 
                        res2 = "unverified";  
                        console.log("doCheck axios.post CATCH, POST doCheck   res2 = ",res2);                                             
                       }  
     console.log("doCheck  post try/catch, POST doCheck   res2 = ",res2); 
       if (res2 != "verified") navigate('/login',{replace: true});

             //return res2;                                                       
    }  //   async function  doCheck(token:any)  

 //async function doNav() {console.log("in doNav"); await navigate('/login',{replace: true});}       


const lp = location.pathname;  // just to make it shorter
//useLayoutEffect(() =>
//useEffect(() =>  
//{
//
//console.log("ReactRouter =",RouterProvider);
 console.log("inside layout/lp ",lp); 
  if (lp==="/about")// || lp==="/contact" || lp==="/extra" )  //  || lp==='auxiliary')   // ie restricted access pages
    {


         console.log("in Layout /  ");
         const token:any = Cookies.get("jwt");   //Cookies.
         console.log(" PRE doCheck, token = ",token); 
        // const tokenx : any = token;  
       //const result = 
       //const resx = 
       if (token) {doCheck(token);   
                  } else 
                  {console.log("in Layout /  token inexistant");     
                   //doNav(); 
                   if (ExecutionEnvironment.canUseDOM) navigate('/login',{replace: true});
                  }    
                                             
    }   //  if (lp==="/about" || lp==="/contact" || lp==="/extra" )  //  ||    
//},[]           );  //   end  useLayoutEffect(() =>                       


BB*/
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/*XX
if (Cookies.get("jwt"))  console.log("in Layout , jwt exists "); else console.log("in Layout , jwt DOES NOT exist");
//if (Cookies.get("jwt"))

const lp = location.pathname;  // just to make it shorter
console.log("inside layout/lp ",lp); 
if (lp==="/about" || lp==="/contact" || lp==="/extra" )  //  || lp==='auxiliary')   // ie restricted access pages
  {console.log("inside layout/lp "); 
    if (Cookies.get("jwt"))   //  ie have web token/cookie named jwt
    {console.log("inside layout/Cookies.get "); 
     const token:any = Cookies.get("jwt");
     console.log("inside layout, token = ",token);  
     

     console.log("in Layout doCheck");
     const tokenx : any = token;  
     //try{  
     //axios.post('/rrr/jwt_auth_post',{tokenx})
     //   }catch(err){
     //              } 

    // doCheck(token);
     //requireAuth;
     //jwt.verify(token,'the_secret_here', (err:any,decodedToken:any) =>  // replace httpOnly in wewb token
     //               {if (err) {console.log(err.message);
     //                          navigate('/login',{replace: true});
     //                         }else {}
     //               }
     //          )
        

    }           //    end   if (Cookies.get("jwt"))
  }        //  end    if (lp==="/about" || lp==="contact" || lp==="extra" )  //  || lp==='auxiliary') 

XX*/


   //if (typeof window !== 'undefined')
   //  {const xxx :any = "jwt=";
       
       //const indexOf= document.cookie.indexOf(xxx);  //(jwt + "=");
      //console.log("in Layout , indexOf = ",indexOf);
      
      //const xx : any = '(?:^|;\\s*)' + jwt + '=([^;]*)';
      //const expression:any  RegExp = xx;//'(?:^|;\\s*)' + jwt + '=([^;]*)';
      //const expression:any  RegExp = '?:^|;\\s*)' + jwt + '=([^;]*';
      //var match = document.cookie.match(RegExp('(?:^|;\\s*)' + jwt + '=([^;]*)')); 
      //var matchx = document.cookie.match(expression); 
      //return match ? match[1] : null;
      //console.log("in Layout , matchx = ",matchx);


   //  }//  be document.cookie.match(/^(.*;)? MyCookie=[^;]+(.*)?$/), notice 
   //             tch(/^(.*;)?\s*MyCookie\s*=\s*[^;]+(.*)?$/)



   //document.cookie.jwt;


  
   //navigate('/signup',{replace: true});  // use redirect react-router-dom ?          
  

    return (
        <>
            <nav className={styles.navWrapper}>
                <ul className={styles.nav}>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"extra"}>Extra</NavLink>
                    </li>

                    <li>
                        <NavLink to={"auxiliary"}>Auxiliary</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={"landing"}>Landing</NavLink>
                     </li>  

                     <li>
                        <NavLink to={"login"}>Login</NavLink>
                     </li> 

                    <li>
                        <NavLink to={"signup"}>Signup</NavLink>
                     </li>                                          
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

interface LayoutProps {
    [key: string]: any
}

export default Layout;