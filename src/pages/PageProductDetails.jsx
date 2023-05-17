import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/api/datadraw";

export default function PageProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const findProduct = (id) => {
    const res = products.filter(i => i.id == id)
    console.log('res', res);
    if (res.length > 0) {
      setProduct(res[[0]])
    }
  }
  useEffect(() => {
    console.log('id', id);
    findProduct(id)
  }, [id]);
  return (
    <>
      <h2>Details Product</h2>

      {!product ?
        <h2>Not found product!</h2>
        : <h2>Name Product: <span>{product?.title}</span></h2>
      }
    </>
  )
}
