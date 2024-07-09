const singinController=async (req,res)=>{
    const {fullName,email,password}=req.body;
    await User.create({
        fullName,
        email,
        password,
        dob
    })
    res.status(200).json()
}