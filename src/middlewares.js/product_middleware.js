const BadRequest = require('../errors/bad_request_eror');
const errorRes=require('../utils/error_response');
function createProductValidator(req,res,next){
    if(!req.body.title){
        return res.status(400).json(errorRes("Please Try Again and Add the Title",new BadRequest("some message")));
    }

      if(!req.body.description){
        return res.status(400).json(errorRes("Please Try Again and Add the description",new BadRequest("some message")));
    }

      if(!req.body.category){
       return res.status(400).json(errorRes("Please Try Again and Add the category",new BadRequest("some message")));
    }

      if(!req.body.price){
        return res.status(400).json(errorRes("Please Try Again and Add the price",new BadRequest("some message")));
    }

      if(!req.body.image){
       return  res.status(400).json(errorRes("Please Try Again and Add the image",new BadRequest("some message")));
    }

    // if thing is correct call next middleware  (callback in the handler function) !!
    next();
};
module.exports={createProductValidator};

