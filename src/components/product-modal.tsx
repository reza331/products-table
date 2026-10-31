import { Product } from "@/data/data"
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react"

interface ProductModalProps {
    elemRef: RefObject<HTMLDialogElement | null>
    setSelectedProduct: Dispatch<SetStateAction<Product | null>>
    product: Product | null
}


export default function ProductModal({ product, elemRef, setSelectedProduct }: ProductModalProps) {

    const [stock, setStock] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (product) {
            setStock(product.stock)
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                timerRef.current = null
            }
        }
    }, [product])

    // just a simple icrease simulation , it is not real 
    const increase = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
            timerRef.current = null
        }
        // Stale Closure Bug
        // setTimeout(() => { setStock(stock + 1) }, 2000)
        // fixed Stale Closure
        timerRef.current = setTimeout(() => { setStock(prev => prev + 1) }, 2000)
    }

    return (
        <dialog onClose={() => setSelectedProduct(null)} ref={elemRef} id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-3">
                {product &&
                    <>
                        <div>- Product Name : {product.name}</div>
                        <div>- Product Category : {product.category}</div>
                        <div>- Product Price : ${product.price}</div>
                        <div>- Product Stock : {stock}</div>
                        <button onClick={increase} className="rounded-2xl btn btn-primary w-fit">Increase stock</button>
                    </>
                }
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
