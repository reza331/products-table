import { Dispatch, SetStateAction } from "react"

interface SearchBarProps {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {

    return (
        <label className="floating-label w-full">
            <span>Search</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search ..." className="input input-md rounded-2xl w-full block" />
        </label>
    )
}
