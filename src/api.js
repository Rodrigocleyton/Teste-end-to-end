const http = require('http')

const routes = {
    '/contact:get': (request, response) => {
        response.write('contact us page')
        return response.end()
    }
}




function handler(request, response) {
    //pegando de dentro do request a URL e o Método
    const { url, method } = request
    //as rotas serão por padrão a URL e o methodo
    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
    const chosen = routes[routeKey]
    return chosen(request, response)
    //console.log({ routeKey } )

}




const app = http.createServer(handler)
.listen(3000, () => console.log('running at 3000'))