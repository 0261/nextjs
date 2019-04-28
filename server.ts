import Express from "express";
import Next from "next";
const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = Express();

    server.get('/', (req:Express.Request, res: Express.Response) => {
        const page = '/';
        console.log('path', req.path);
        console.log('body', req.body);
        console.log('query', req.query);
        console.log('params', req.params);
        const params = {
            name: 'padakim'
        }
        app.render(req, res, page, params);
    })

    server.route('*').get((req: Express.Request, res: Express.Response) => handle(req, res));
    
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });

})