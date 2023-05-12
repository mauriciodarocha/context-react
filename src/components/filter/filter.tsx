import { ChangeEvent, useState } from "react"

export const Filter = () => {
  const [search, setSearch] = useState("")
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return <>
    <input placeholder="Search" value={search} onChange={onChange} />
  </>
}
