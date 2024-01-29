// const user={
//     username:"Megha",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         console.log("Got user details from database");
//         //console.log(`Username:${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

// // //for this user2 we need constructor
// console.log(user.username);
// console.log(user.getUserDetails());

// const promise1=new Promise()
// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username= username//left side value variable hai 
    //rightside value jo aap paas krkr dere ho 

    this.loginCount=loginCount;
    this.isLogggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

// const userOne=User("Mahira", 34,true)
// const user2=User("js learning", 87, true)
// console.log(userOne);// values override hori h userone print krne se js leraning aara h


//override create problem that why we use new 

const userOne=new User("Mahira", 34,true)
const user2= new User("js learning", 87, true)
console.log("userOne:  ",userOne.constructor);
console.log("user2: ",user2)


// method : instanceof // learn about it
/*new ==>>
step 1 :  jab bhi new keyword create karenge to
 empty object create hota h jisko instance bola
   jata hai 
step 2 : Constructor function call hota h new keyword ke karan 
argument bagera ko pack krta h or phir this ko de deta hai
step 3  : this function ke throug argument inject hota hai 
step 4 : function ke ander  mil jata hai 
*/