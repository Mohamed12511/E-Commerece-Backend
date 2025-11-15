
// In DB memory 
const products=[];
function Create_Product(product){
    const newProduct={
        id:products.length,
        ...product
    };
    products.push(newProduct);
    return newProduct;
}

const getProducts=()=>{
    return products;
}
const getProductById=(id)=>{
    return products.filter((val)=>val.id==id);
}


module.exports={Create_Product,getProducts,getProductById};