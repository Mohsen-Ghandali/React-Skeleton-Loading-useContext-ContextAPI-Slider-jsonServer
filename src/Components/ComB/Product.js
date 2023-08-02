import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = ({ product }) => {
    let[name,setName]=useState(null)
    let[img,setImg]=useState(null)
    let[price,setPrice]=useState(null)
    let[description,setDescription]=useState(null)

    useEffect(()=>{
      setTimeout(() => {
        setName(product.name)
        setImg(product.img)
        setPrice(product.price)
        setDescription(product.description)
      }, 2000);
    },[product])

    return (
        <>
            <h3>{name || <Skeleton count={1} height={"48px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} /> }</h3>

            {img && <img src={img} alt={product.alt} />}
            {!img && <Skeleton count={1} height={"350px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} />}

            <p><strong>{price || <Skeleton count={1} height={"30px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} />}</strong></p>

            <p className="des">{description || <Skeleton count={10} baseColor={"#a68a65"} highlightColor={"#f5d9b5"}/>}</p>
            
        </>
    )
}

export default Product;


// --------------Method for upload to Host---------------------------------

// import { useEffect, useState } from "react";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// const Product = ({ product }) => {
  

//     return (
//         <>
//             <h3>{product.name || <Skeleton count={1} height={"48px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} /> }</h3>

//             {product.img && <img src={img} alt={product.alt} />}
//             {!product.img && <Skeleton count={1} height={"400px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} />}

//             <p><strong>{product.price || <Skeleton count={1} height={"32px"} baseColor={"#a68a65"} highlightColor={"#f5d9b5"} />}</strong></p>

//             <p className="des">{product.description || <Skeleton count={10} baseColor={"#a68a65"} highlightColor={"#f5d9b5"}/>}</p>
            
//         </>
//     )
// }

// export default Product;