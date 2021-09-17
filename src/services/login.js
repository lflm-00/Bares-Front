import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  try {
    const { data } = await axios.post(baseUrl, credentials)
    return data
  } catch (error) {
    console.log([error.request.status]);
  }

}

export default { login }