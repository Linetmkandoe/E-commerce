import './index.css'
import { productsGetProducts } from './hooks/productGetProduct';



const Products = ()=>{
    const { products, error,loading} = productsGetProducts();
    console.log({products})
    return(
        <div className="images">
            {loading && <h2>Loading products ...</h2>}
            {error.length> 0 && <h2>{error}</h2>}
            {products.length>0?(
                <div className='product.grid'>
                {products.map((product)=>(
                   <div className='card'>
                    <img src={product.image} alt={product.title}/>
                    <h3 className='title'>{product.title}</h3>
                    <p className='description'>{product.description}</p>
                    <p className='price'>${product.price}</p>
                   </div>
                ))}
                </div>
                ):(
             !loading && <h2>No product found</h2>
            )}
        </div>
        );
    }
    
export default Products;