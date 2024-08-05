import axios from "axios"


export const GenericApi =  () => {
  const apiKey = "y7Smy4KuDbeVqacAscv0k2rYdwmKufqt4IGoYN9n"
  const getApi  = async (url:string) =>{
    
    const endpoint: string = `${url}?api_key=${apiKey}`

    try {
      const response = await axios.get(endpoint)
      return response
      
    } catch (error) {
      console.error(error)
    }

  }


  return {
    getApi
  }
}
