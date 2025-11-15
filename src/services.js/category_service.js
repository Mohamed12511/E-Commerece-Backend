class CategoryService{
    constructor(repository){
        this.repository=repository;
    }

   async CreateCategory(category){
    const response=await this.repository.CreateCategory(category.name,category.description);
    return response;
    };
    async getCategory(id){
        try{
        const response=await this.repository.getCategory(id);
        return response;
        }catch(err){
            console.log("Something Wrong",err);
        }
    }

    async getCategories(){
        try{
        const response=await this.repository.getCategories();
        return response;
        }catch(err){
            console.log("Something Wrong",err);
        }
    }
}

module.exports={CategoryService};
