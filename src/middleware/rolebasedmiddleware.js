const verifyrole=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"Acess denied"});
        } 
        next();
    }
      

}
export default verifyrole;
// router.get("/manager",
//     (req,res,next)=>{
//         if(!["manager","admin"].includes(req.user.role)){
//             return res.status(403).json({ message:"Access denied"});
//         }
//         next(); // let Express continue to route handler
//     },
//     (req,res)=>{
//         res.send("Hello I am manager");
//     }
// )
// Outer function → takes a name and returns a greeting function
// function greetFactory(name) {
//   return function () {
//     console.log("Hello, " + name + "!");
//   };
// }

// // We call the outer function with a name
// const greetAlice = greetFactory("Alice");
// const greetBob = greetFactory("Bob");

// // greetAlice and greetBob are now functions (callbacks)
// greetAlice(); // Output: Hello, Alice!
// greetBob();   // Output: Hello, Bob!
// 🔹 Step-by-step explanation
// greetFactory("Alice") runs → returns the inner function:

// js
// Copy code
// function () {
//   console.log("Hello, " + name + "!");
// }
// name is remembered inside this function because of closure.

// We assign it to greetAlice.

// greetAlice is now a function ready to be called later.

// When we do greetAlice(), the inner function executes, prints "Hello, Alice!".

// Same for greetBob() — the inner function “remembers” "Bob".

// 🔹 How this relates to RBAC
// js
// Copy code
// const verifyRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Access denied" });
//     }
//     next();
//   };
// };
// verifyRole("admin") → outer function runs → returns inner function (callback)

// Express calls the inner function automatically with (req, res, next)

// Inner function “remembers” that roles = ["admin"] from the outer function.

// Exactly like greetAlice() remembers "Alice".

// 🔹 Analogy Table
// Greeting example	RBAC example
// greetFactory("Alice") → greetAlice()	verifyRole("admin") → middleware function
// remembers "Alice"	remembers ["admin"]
// executes later	executes when request comes