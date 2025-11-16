
// In DB memory 
const FakeStoreRepository=require('../repository/fake_store_repository');
const repository=FakeStoreRepository;
const products=[];

class ProductService{
    constructor(repository){
        this.repository=repository;
    }
Create_Product(product){
    const newProduct={
        id:products.length,
        ...product
    };
    products.push(newProduct);
    return newProduct;
}

getProducts=async ()=>{
    const products= await this.repository.getProducts();
    return products.data;
}
getProductById=(id)=>{
    return products.filter((val)=>val.id==id);
}
}


module.exports=ProductService;