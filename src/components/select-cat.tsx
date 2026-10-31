import { Dispatch, SetStateAction } from "react"

interface SelectCatProps {
    setCategory: Dispatch<SetStateAction<string>>
}

export default function SelectCat({ setCategory }: SelectCatProps) {
    return (
        <select onChange={(e) => setCategory(e.target.value)} defaultValue="All" className="select select-primary rounded-2xl">
            <option disabled={true}>Filter by Category</option>
            <option value={'All'}>All</option>
            <option value={'Laptop'}>Laptop</option>
            <option value={'Phone'}>Phone</option>
            <option value={'Accessory'}>Accessory</option>
            <option value={'Monitor'}>Monitor</option>
        </select>
    )
}
