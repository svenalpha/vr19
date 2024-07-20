import express, { Router } from 'express';  
import WorkoutModelDb from "./models/workoutDbModel.js";
import   users    from "./db/Users.js";
//import {getEnv,getAllWorkoutEntries,
//    //updateWorkoutEntry,
//    createWorkoutEntry} from "./controllers/workoutController.js";
import  { getAllWorkoutEntries, getSecondExport, createWorkoutEntry, deleteWorkoutEntry, 
          updateWorkoutEntry }  from "./controllers/workoutController.js";

import  { signup_get , signup_post, login_get , 
          login_post }  from "./controllers/authController.js";
//import   people   from  "@db/people";


class App {
          
    public router: Router = express.Router();

   
  
    constructor() {

     //   //const ppp = people;
        this.router.get('/users', (req, res) => { 
        res.status(200).json(users    
                            )                   }               
                       ) 

        this.router.get("/signup",  signup_get  ); 
        this.router.post("/signup",  signup_post);
        this.router.get("/login",  login_get);
        this.router.post("/login",  login_post);

        this.router.get("/doGetSecondExport",  getSecondExport);  //see export const getAllWorkoutEntries in workoutController.js


        // GET all entries   
        this.router.get("/getMongo",  getAllWorkoutEntries);  //see export const getAllWorkoutEntries in workoutController.js
        //this.router.get('/getMongo', async (req, res) => {
        ////  res.send("/rrr/getMongo     in server/app.ts")
        //const workouts = await WorkoutModelDb.find({}).sort({createdAt: -1});  // ie find all, sorted in descending order       
        //// ....find({reps:20}).... finds all entries where reps=20
        // return res.status(200).json(workouts);  
        //                                                 }                
        //               )             

        // POST new entry   
        this.router.post("/postMongo", createWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js  

         // DELETE new entry   
        this.router.delete("/deleteMongo/:id", deleteWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js  
        // DELETE new entry   
        this.router.patch("/updateMongo/:id", updateWorkoutEntry); //  see export const createWorkoutEntry in workoutController.js  



      //  this.router.post('/postMongo"', (req, res) => {
      //      //res.send("/rrr/proxy2 in server/app.ts")                      // req.path req.headers.origin
      //      //console.log("titlex  = titlex");      //const url = req.originalUrl   console.log("req.params = ",req.params);  
      //      console.log("inside Extra/app.ts   req.body =", req.body);    //
      //      console.log("inside Extra/app.ts   req.params =", req.params);
      //      //console.log("inside Extra/app.ts   req.params.id =", req.params;
      //     // const {title, reps, load} = req.body; 
      //                                               }
      //                  )                             

        this.router.get('/proxy2', (req, res) => {
            res.send("/rrr/proxy2 in server/app.ts")
                                                 }
                       )    


        this.router.get('/', (req, res) => {
            res.send("Welcomeeee I!")
                                           }
                       )                    

        this.router.get('/tsmessage', (req, res) => {
            res.send("in server/app.ts rrr/tsmessage:  this message has been -- fetched --  ")
                                                    }
                       )              

        this.router.get('/folks', (req, res) => {
            res.status(200).json([    
               {id:0,name:"Billy",star:"aquarius"
               }, 
               {id:1,name:"Fred",star:"pisces"
               }    
                                 ])
                                                }

                       )                          

                  }   // end constructor    
}    //  end class App

const api = new App()

export default api;