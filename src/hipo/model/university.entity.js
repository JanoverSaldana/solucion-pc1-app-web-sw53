
export class University{
    constructor( {name = '', domains=[], web_pages=[]}, logo = ''){
        this.name = name;
        this.domains = domains;
        this.web_pages = web_pages;
        this.logo = logo;
    }
}