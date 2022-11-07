import axios from "axios";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";




var getToken = secureLocalStorage.getItem('token')

var BASE_URL = ''


export const getRequest = async (url: string) => {
  var res = await axios.get(BASE_URL + url,
    {
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
      },
    })

    if(res?.status === 200){
      return res
    }
    if(res?.status === 401 || getToken === null){
    
    }
}




export const postRequest =  async (url: string, payload?) => {
  var res = await axios.post(BASE_URL + url, payload, {
    headers: {
      authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
    }
  })
  if(res?.status === 200){
    return res
  }
  if(res?.status === 401 || getToken === null){
   
  }
}



export const deleteRequest = (url: string, payload) => {
  return axios.delete(BASE_URL + url, payload)
}



export const truncate = (info: string, num: number) => {
  return info?.length > num ? info?.substr(0, num - 1) + "..." : info 
}

