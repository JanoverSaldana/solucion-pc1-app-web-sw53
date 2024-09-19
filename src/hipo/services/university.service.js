import axios from "axios";
import {LogoApiService} from "../../shared/services/logo-api.service.js";

const http = axios.create({ baseURL: 'http://universities.hipolabs.com'});


export class UniversityApiService {

    logoApi = new LogoApiService();

    getAllResources(){
        return http.get('/search?country=peru');
    }

    getUrlToLogo(resource) {
        return this.logoApi.getUrlToLogo(resource);

    }

}
