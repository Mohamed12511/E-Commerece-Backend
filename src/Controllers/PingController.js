const PingController=(req,res)=>{
    res.json({msg:"V1 With You"});
}

const  PingControllerV2=(req,res)=>{
    res.json({msg:"V2 With You now"});
}

module.exports={
    PingController,
    PingControllerV2
};

