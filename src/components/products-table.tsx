import { PropsWithChildren } from 'react'

export default function ProductsTable({ children }: PropsWithChildren) {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-base-100 rounded-2xl">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}
