import { Product } from "@/data/data";
import { memo } from "react";

interface ProductTableItemProps {
  product: Product
  onSelect: (product: Product) => void
}

function ProductTableItem({ product, onSelect, }: ProductTableItemProps) {

  console.log('Product Render:', product.name);

  return (
    <tr className="cursor-default" onClick={() => onSelect(product)}>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td className="whitespace-nowrap">${product.price}</td>
      <td>{product.stock}</td>
    </tr>
  )
}

export default memo(ProductTableItem);