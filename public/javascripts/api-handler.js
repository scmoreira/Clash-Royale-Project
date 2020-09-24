class RoyaleApiHandler {
    constructor() {
        this.app = axios.create({
            method: 'get',
            baseURL: 'https://api.clashroyale.com/v1/',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            },
            data: data
            
        })
        return data
    }
//cambiossss
    // getAllCard = () => this.app('cards')
}