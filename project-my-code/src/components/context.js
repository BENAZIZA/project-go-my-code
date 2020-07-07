import React ,{useState}  from 'react'
const FoodContext = React.createContext()


const FoodProvider = (props) => {
    const [login,setLogin]=useState (false)

    return (
        <FoodContext.Provider value ={{login:login}}>
            {props.children}
            
        </FoodContext.Provider>
    )
}
export {FoodProvider,FoodContext}



