


import useHelmet from '@hooks/useHelmet';
//npimport { Helmet } from "react-helmet";
import React, { useEffect , useState} from 'react';
import axios from "axios";
//import styles from './Login.module.scss';  
import "./Login.css";





const Login: React.FC<LoginProps> = (props) => 
{
console.log("in Login, props = ",props);   
console.log("in Signup, props = ",props);   
const [password,setPassword] = useState();
const [email,setEmail] = useState();

const helmet = useHelmet();

//<Helmet><style type="text/css">
//{`._navWrapper_nssbc_1{display: none}`}
//</style>//</Helmet>

    
    useEffect(() => {
        helmet.setTitle("Login")
    },[helmet])    



    const handleSubmit = async (e:any) => 
        {e.preventDefault(); 
         console.log("in handleSubmit, e = ",e); 
         //const aaa=e.value.password;
         console.log("in handlesubmit, password = ",password); 
         console.log("in handlesubmit, email = ",email); 
         try{ await axios.post('/rrr/signup',{password,email})     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
         .then((response) =>     //  ie success
         {console.log(" axios response = ",response);
        //setEmptyFields([]);setError2(null);setTitle(""); setLoad(""); setReps("");   
         //dispatch({type:"CREATE_WORKOUT",payload: json});
        // dispatch({type:"CREATE_WORKOUT",payload: response.data});
         }    );
            }catch(err){console.log("in login, err =  ",err);
                       };
          //const email = form.email;
        }
      



    return (<>
    {/*  <style type="text/css">{`._navWrapper_nssbc_1{display: none}`}</style>  */}        
       
            <h1>Login</h1>
            <h4>inside of an h4</h4>
   <form className="form" onSubmit={handleSubmit}>
     <h2>Sign up</h2>
     <div className="form-control">
       <label htmlFor ="email">Email</label>       
       <input type= "text"  name="email" defaultValue ={email}       
                               onChange={(e:any) => setEmail(e.target.value)}  required />      
       <div className="email error"></div>   
     </div>

     <div className="form-control">
       <label htmlFor="password">Password</label>
       <input type="password"  id="password" name="password" defaultValue ={password}  
                     onChange={(e:any) => setPassword(e.target.value)}  required/>                 
       <div className="password error"></div> 
     </div>
     <button type="submit">Sign up</button>
   </form>     {/* see TNN_Auth for form css*   see 1-controlled-inputsjs for react forms */}




            
            
           <p>empty page </p>
       
       </>)         
}   

interface LoginProps {
    [key: string]: any
}

export default Login;




