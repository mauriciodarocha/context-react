import { useState } from 'react'
import { Filter } from './components/filter/filter'
import { List } from './components/list/list'
import { GlobalContext } from './utils/GlobalContext'

const App = () => {
  const [search,setSearch] = useState("")
  return (
    <GlobalContext.Provider value={{search:search,setSearch:setSearch}}>
      <div className='app'>
        <Filter />
        <List />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
