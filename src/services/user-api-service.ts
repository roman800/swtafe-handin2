import axios from "axios";

class UserAPIService {

    private endpoint!: string;

    constructor() {
        this.endpoint = process.env.REACT_APP_API_URL + "/api/Users" 
    }

    login(credentials: {email: string, password: string}){
        console.log(process.env)
        return axios.post<{jwt: string}>(this.endpoint + '/login', credentials)
    }


}

const userAPIService = new UserAPIService()

export default userAPIService