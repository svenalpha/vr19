


import useHelmet from '@hooks/useHelmet';
//npimport { Helmet } from "react-helmet";
import React, { useEffect , useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  
//import styles from './Login.module.scss';  
import "./Login.css";





const Login: React.FC<LoginProps> = (props) => 
{
console.log("in Login, props = ",props);   
const navigate = useNavigate();
const [password,setPassword] = useState();
const [email,setEmail] = useState();
// 2 lines below: moved to useEffect for quick fix to "document is not defined" error
//const emailError:any = document.querySelector('.email.error');
//const passwordError:any = document.querySelector('.password.error');
var  emailError:any;
var passwordError:any;

const helmet = useHelmet();

//<Helmet><style type="text/css">
//{`._navWrapper_nssbc_1{display: none}`}
//</style>//</Helmet>    
useEffect(() => {emailError = document.querySelector('.email.error');
  passwordError = document.querySelector('.password.error');      
});    


const handleSubmit = async (e:any) => 
{e.preventDefault(); 
console.log("in handleSubmit, e = ",e); 
//const aaa=e.value.password;
console.log("in handlesubmit, password = ",password);           
console.log("in handlesubmit, email = ",email); 
try{ await axios.post('/rrr/login',{password,email})     //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
.then((response) =>     //  ie success                      
{console.log(" success axios response = ",response);           
navigate('/',{replace: true});                                          
//setEmptyFields([]);setError2(null);setTitle(""); setLoad(""); setReps("");                 
//dispatch({type:"CREATE_WORKOUT",payload: json});                          
// dispatch({type:"CREATE_WORKOUT",payload: response.data});               
}  );                                                            
}catch(err:any)
{console.log("in login, err =  ",err);                 
const errors = err.response.data.errorsx;                                
console.log("in login, errors  =  ",errors);                                  
console.log("in login, errors.email =",errors.email);                     
console.log("in login, errors.password =",errors.password);                    
console.log("in login, err:   err.response  =  ",err.response);               
                                                                  
emailError.textContent = errors.email;                      
passwordError.textContent = errors.password;                                   
};                        
//const email = form.email;           
}    
    
    useEffect(() => {
        helmet.setTitle("Login")  
    },[helmet])   
    
                  
    return (<>
      {/* <style type="text/css">{`._navWrapper_nssbc_1{display: none}`}</style> */}          
       
        
      <h1>Login</h1>
            <h4>inside of an h4</h4>
   <form className="form" onSubmit={handleSubmit}>
     <h2>Log in</h2>
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
     <button type="submit">Log in</button>
   </form>     {/* see TNN_Auth for form css*   see 1-controlled-inputsjs for react forms */}


   <p>empty page </p>
   
   <div><button>asdfgghjkjkll;l;mmnnbbvvcx</button></div>  
     


       </>)         
}   

interface LoginProps {
    [key: string]: any
}

export default Login;




