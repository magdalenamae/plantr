sessionurl = 'http://localhost:3000/api/session'
const getUserid = async(sessionurl)=>{
    const response = axios(sessionurl);
    console.log('response.data',response.data)
}