const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case '/':
            if (req.method === 'GET') {
                res.statusCode = 200;
                res.end('"Спасибо за запрос, скоро придумаю, что тебе ответить"')
                }
                console.log('запрос по url = "/"')
            break

        case '/game':
            if (req.method === 'GET') {
            res.statusCode = 200;
            res.end('"Спасибо за запрос, скоро придумаю, что тебе ответить"')
            }
            if (req.method !== "GET") { 
                res.statusCode = 405;
                res.end("запрещённый метод запроса, по данному url доступен только GET");
              }
            console.log('Отдаем данные по игре')
            break

        case '/vote':
            if (req.method !== "POST") { 
                res.statusCode = 405;
                res.end("Запрещённый метод запроса");
              }
                if (req.method === 'POST' && req.body) {
                    res.statusCode = 200;
                    res.end('"Спасибо за запрос, скоро придумаю, что тебе ответить"')
                    console.log(req.body)
                }
                
            console.log('запрос по url = "/vote"')
            break

        default:
            res.statusCode = 404;
            res.end('"Not Found"')
    }

   

    res.writeHead(200,
        { 'Content-Type': 'html/text; charset=utf-8' })
    res.end('<h1>Скоро тут будет сервис рейтинга</h1>', 'utf8')
})
server.listen(3000)