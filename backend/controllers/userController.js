 const getAllUsers=(req,res)=>{
    res.send("all user fetched");
 };
 const signup=(req,res)=>{
    res.send("sinuup");
 };
 const login=(req,res)=>{
    res.send("logging in!!");
 };
 const getUserProfile=(req,res)=>{
    res.send("profile fetch");
 };
 const updateUserProfile=(req,res)=>{
    res.send("Profile updated");
 };
 const deleteUserProfile=(req,res)=>{
    res.send("Profile deleted");
 }
 
 module.exports={
    getAllUsers,
    signup,
    login,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
 };
 