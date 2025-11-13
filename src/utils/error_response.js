const errorResponse=(msg,error)=>{
   
        return{
            success:false,
            data:{},
            msg:msg,
            error:{
                error:error
            }
      }};
    module.exports=errorResponse;



