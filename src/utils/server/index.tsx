import axios from "axios";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";



const Base_url = "https://staging-backend.getrenewabletek.com/api/v1"


var getToken = secureLocalStorage.getItem('token')



export const getRequest = async (url: string) => {
  var res = await axios.get(Base_url + url,
    {
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
      },
    })
    if(res?.status === 200){
      return res
    }
    
    if(res?.status === 401 || getToken === null){
      secureLocalStorage.clear()
      localStorage.clear()
      return window.location.href = '/'
    }
}


export const patchRequest = async (url: string, payload?) => {
  var res = await axios.patch(Base_url + url, payload,
    {
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
      },
    })
    if(res?.status === 200){
      return res
    }
    
    if(res?.status === 401 || getToken === null){
      secureLocalStorage.clear()
      localStorage.clear()
      return window.location.href = '/'
    }
}

export const postRequest =  async (url: string, payload?) => {
  var res = await axios.post(Base_url + url, payload, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
    }
  })
  if(res?.status === 200){
    return res
  }
  if(res?.status === 401 || getToken === null){

  }
}

export const updateRequest =  async (url: string, payload?) => {
  var res = await axios.put(Base_url + url, payload, {
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

export const deleteRequest = (url: string) => {
  return axios.delete(Base_url + url, {
    headers: {
      authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
    },
  })
}


export const uploadImageFunc = (payload) => {
  return axios.post(Base_url, payload, {
    headers: {
      authorization: `Bearer ${secureLocalStorage.getItem("token")}`,
    },
  })
}




export const capitalizeSentence = (data: string) => {
  const arr = data.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  
  }
  var str2 = arr.join(" ");
  return str2
}

export const truncate = (info: string, num: number) => {
  return info?.length > num ? info?.substr(0, num - 1) + "..." : info 
}

export const getCurrentDate = (data: any)=>{
 
  var date = new Date(data).getDate();
  var month = new Date(data).getMonth() + 1;
  var year = new Date(data).getFullYear();

  return date + '-' + month + '-' + year;//format: d-m-y;
}
