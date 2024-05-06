const userRouter=require("../user/user.js")
userRouter.use("/user",userRouter)
module.exports=userRouter;