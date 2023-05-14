import { ChangeEvent, useContext, useState } from "react"
import { GlobalContext } from "../../utils/GlobalContext"

export const Filter = () => {
  const {search, setSearch} = useContext(GlobalContext)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return <div className="filter">
    <input placeholder="Search" value={search} onChange={onChange} />
  </div>
}
