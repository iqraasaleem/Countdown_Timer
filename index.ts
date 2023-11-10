import { differenceInSeconds } from "date-fns";
import min from "date-fns/min";
import inquirer from "inquirer";
///* 

const response = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "please enter the ammount of second",
    validate: (input) => {
      if ( isNaN(input) ) {
        return "please enter valid number";
        
      } else if (input > 60) {
        return "seconds must be in 60";  
      } else{
        return true;
      }
}});

//*/
let input = response.userInput;

function startTime(value:number) {
    const initailTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(initailTime);
    
  setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime, currentTime);
    if (timeDiff <= 0) {
        console.log("Timer has expired");
        process.exit();      
    }
    const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDiff % 60);
    console.log(`${minute.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
  }, 1000);
}
startTime(input)

//const date = new Date();
//console.log(date);
//console.log("initial time" + intervalTime);

