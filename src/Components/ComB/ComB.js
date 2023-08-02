import { useContext } from "react"
import { MyContext } from "../App/App"
import "./ComB.css"
import Product from "./Product"

const ComB = () => {
  let { products, error, loading } = useContext(MyContext)

  return (
    <>

      {error && <div className="text-danger text-center">{error}</div>}
      {loading && (<div className="spinner-border spinner-border.-sm offset-6 " ></div>)}
      <h1>Products</h1>

      <div className="prc">
        {products && products.map((elem) => {
          return (
              <div key={elem.id} >
            <Product product={elem} />
              </div>
          )
        })}
   </div>

    </>
  );
}

export default ComB;





