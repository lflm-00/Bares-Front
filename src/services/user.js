import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users/'


// const baseUrlLuis = 'http://localhost:3001/api/users/prueba'

const userRegister = async credentials => {
  try {
    const { data } = await axios.post(baseUrl, credentials)
    return data
  } catch (error) {
    console.log([error.response.status]);
    return error.response;
  }
   
  }

const getAllUsers = () =>{
  const request = axios.get(baseUrl);
  return request.then(response => response.data)
}

const getUser = (token) =>{
  
  const request = axios.get(baseUrl+token)
  return request.then(response => response.data)
}

const deleteUserById = (id) =>{
  const request = axios.delete(baseUrl+id)

  console.log(request);
  return request.then(response => response.data)
}





  // const getUserId = () => {
  //   const request = axios.get(baseUrlLuis)
  //   console.log(request);
  //   return request.then(response => response.data)
  // }

export default { userRegister , getAllUsers , getUser , deleteUserById}