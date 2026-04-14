//Immediately invoked Function Expression(IIFE)
(function chai(){  //named IIFE
    console.log(`DB CONNECTED`);
    
})();  
//use semcolon(;) at end of IIFE then write another IIFE
//global scope pollution creates problem sometimes so we use IIFE to renmove that pollution 
//IIFE is use to immediately run tha function

(()=>{ //unnamed IIFE
    console.log(`DB CONNECTED TWO $`);
    
})();


((name)=>{     //parameter IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("RIitk")