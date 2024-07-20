import mongoose from 'mongoose';

import jwt from "jsonwebtoken";
import Punter from "../models/punter"

export const signup_get = async  (req:any,res:any)=>
 {
    
   console.log("inside controllers/authControllers    signup_get");
//    console.log("in controllers  update('/:id'...");
//    console.log("in controllers  update req.body = ",req.body);
//    const {id} = req.params;
//    console.log("in controllers  update  req.params = ",req.params); 
//    console.log("in controllers update id = ",id);   
//    if (!mongoose.Types.ObjectId.isValid(id)) // ie entered id is of mongoose id length and type to even consider as an id
//         return res.status(404).json({error: "not a valid id"});  
//    const workout = await WorkoutModelDb.findOneAndUpdate({_id : id} ,{...req.body}, {returnDocument: "after" });     
//    console.log("workout returned following findOneAndUpdate= ",workout);                                                             
//    if (!workout) {return res.status(400).json({error: "no such entry"});}           
//       return res.status(200).json(workout);  

//res.json({mssg: "inside Env in workoutController.js"}); 
}     //   end    export const updateWorkoutEntry = async  (req:any,res:any)=>                                           

//import cookieParser from "cookieParser";
//app.use(cookieParser());


//   create new entry
const maxAgeSecs= 60*60*24*3;    // 3 days.  this maxAge uses seconds not milliseconds
export const signup_post = async  (req:any,res:any)=>
{const {email, password} = req.body;  
 let errorsx:any = {email:'',password:''};
 console.log("pre mongo create, req.body = ",req.body);  
 try{const punterx = await Punter.create({email,password});  //const punter = await Member.create({email,password});
     console.log("response from mongo, returning res.status(201) punterx = ",punterx);

     let punter_id :any = punterx._id; 
     const token = jwt.sign({punter_id},'the_secret_here',{expiresIn: maxAgeSecs});  
     res.cookie('jwt',token,{httpOnly: true, maxAge: maxAgeSecs*1000}); // secure: true only sent with 
     //   https //  see TNN_Node Auth #9 9:35 // htttpOnly  so the cookie(jwt) cannot be modified in the 
     // front end) thus eg  {httpOnly: true,maxAge: maxAgeSecs*1000, secure: true}

      return  res.status(201).json({punterx: punterx._id});
     //return res.status(201).json(punterx);
    }catch (error:any){console.log("do error: error.code = ",error.code);
                       if (error.code === 11000)  // this error does not receive an error message, so treated independantly
                           {errorsx.email ="email aready registered";
                            console.log("already used email message. errorsx.email =",errorsx.email);
                            return res.status(400).json({errorsx});
                           }             

                       //console.log("negative response from mongo. return res.status(400).json({error: error.message}; error.message =", error,error.message,error.code);
                       //Object.values(error.errors).forEach((error:any) =>{console.log("error.properties",error.properties.message);});
                       //Object.values(error.errors).forEach(({properties}) =>{console.log("properties = ",properties);});   
                       let array2 :any[] =  Object.values(error.errors);
                       //console.log("array2 = ",array2);

                      
                       //array2.forEach((properties.message)     );
                       //let array3 :any[] = array2;array3.forEach((properties) =>   {console.log("array3.forEach properties = ",properties);}       );
                       //let array3 :any[] = array2;
                       array2.forEach(({properties}) =>
                           {console.log("array3.forEach properties = ",properties);  
                            errorsx[properties.path]  = properties.message;
                            console.log("errorsx = ",errorsx);
                            return res.status(400).json({errorsx});
                           }       
                                                                );
                       
                       //array1.forEach(({properties}) =>{console.log("properties = ");}); 
                       //console.log("Object.values(error.errors) = ",Object.values(error.errors).forEach(error =>{console.log(errors.properties);}) );
                        //({error: error.message});
                      };
 


console.log("in auth",);
}    

export const login_get = async  (req:any,res:any)=>
{
}
export const login_post = async  (req:any,res:any)=>
{
}

export default { signup_get, signup_post, login_get,
                 login_post };


