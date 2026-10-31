'use client'
import ProductTableItem from "@/components/product-item";
import ProductModal from "@/components/product-modal";
import ProductsTable from "@/components/products-table";
import SearchBar from "@/components/search-bar";
import SelectCat from "@/components/select-cat";
import { Product, products } from "@/data/data";
import { Profiler, ProfilerOnRenderCallback, useCallback, useMemo, useRef, useState } from "react";

export default function Home() {

  console.log('rendering');

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const modalRef = useRef<HTMLDialogElement | null>(null)

  // const filteredProducts = products.filter(product => {

  //   console.log('ejra');

  //   const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())

  //   const matchesCat = category === 'All' || product.category === category

  //   return matchesSearch && matchesCat

  // })
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCat = category === 'All' || product.category === category
      return matchesSearch && matchesCat
    })
  }, [search, category])

  const selectProduct = useCallback((product: Product) => {
    if (modalRef.current) {
      setSelectedProduct(product)
      modalRef.current.showModal()
    }
  }, [])

  const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
  };

  return (
    <div className="p-10 flex flex-col gap-5">
      <div>Products Table</div>
      <div className="w-full flex items-center gap-3">
        <SearchBar search={search} setSearch={setSearch} />
        <SelectCat setCategory={setCategory} />
      </div>
      <Profiler onRender={onRender} id="table_profiler" >
        <ProductsTable>
          {filteredProducts.map((product, index) =>
            <ProductTableItem onSelect={selectProduct} key={product.id} product={product} />
          )}
        </ProductsTable>
      </Profiler>
      <Profiler id="modal_profiler" onRender={onRender}>
        <ProductModal setSelectedProduct={setSelectedProduct} product={selectedProduct} elemRef={modalRef} />
      </Profiler>
    </div>
  )

}
