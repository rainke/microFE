import Hapi from 'hapi'
import path from 'path';

console.log(process.cwd())
const server = new Hapi.Server({
    host: '0.0.0.0',
    port: 8100,
    routes: {
        files: {
            relativeTo: path.join(__dirname, '..', 'public')
        }
    }
});