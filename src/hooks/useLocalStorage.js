import { useState,useEffect} from "react"

export function useLocalStorage(key, defaultValue=[]) {
  const [state, setState] = useState(
    () =>JSON.parse(localStorage.getItem(key)) ?? defaultValue,
  )

 useEffect(() => {
    localStorage.setItem(key,JSON.stringify( state))
  }, [key, state])

  return [state, setState]
}


// export function useLocalStorage(key,defaultValue='',{serialize=JSON.stringify,deserialize=JSON.parse} = {}){

// const [state,setState] = useState(
// ()=>{
// 	const valueInLocalStorage= localStorage.getItem(key)
// 	if(valueInLocalStorage){
// 		try {
// 			return deserialize(valueInLocalStorage)
// 		} catch (error) {
// 			 window.localStorage.removeItem(key)
// 		}
// 	 return typeof defaultValue === 'function' ? defaultValue() : defaultValue
// 	}
// }


// )
// const prevKeyRef = useRef(key)



// useEffect(()=>{

// 	const prevKey = prevKeyRef.current

// 	if(prevKey !== key){
// 		localStorage.removeItem(prevKey)
// 	}
// 	prevKeyRef.current = key

// 	localStorage.setItem(key,serialize(state))

// localStorage.setItem(key,state)
// },[key,setState])
// return [state,setState]
// }