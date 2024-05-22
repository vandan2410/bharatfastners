import BOLT from '../assests/download.jpeg'

function ProductCard({product}) {
    console.log(product.imageUrl)
    return(
        <div className="h-[400px] w-[400px]  mx-10 my-5 text-black border-[2px] rounded-lg border-black mt-10" >
            <div className="h-[40%] w-full " >
                <img src={product.imageUrl} className='object-fill h-full w-full ' alt=""/>
            </div>
            <div className=" h-1/10  font-bold text-[22px] my-3 ml-5" >
                <p>{product.name}</p>
            </div>
            <div className=" h-1/2  text-justify mx-3" >
                {product.description}
            </div>
        </div>
    )
}
export default ProductCard;