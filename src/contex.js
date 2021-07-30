import React, { useState, useContext, useReducer, useEffect } from 'react'
import Client from './contentful'

const AppContext = React.createContext()
const AppProvider = ({children}) => {

  const [all, setAll] = useState('')
 const [loading, setLoading] = useState(true)

  const setdata=async()=>{
    setLoading(true)
    let response=await Client.getEntries({
            content_type:"projectslist"
      })
      //console.log(response)
     setAll(response)
     setLoading(false)
  }
  useEffect(() => {
     setdata()
  }, [])
    
   
    
  return <AppContext.Provider value={{all,loading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
