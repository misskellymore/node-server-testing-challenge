const helmet = require('helmet')

const server = express();



server.use(helmet());    
server.use(cors());
server.use(express.json());


server.use('/api', route);

server.get('/', (req, res) => {

    res.json({api:'up'})

})



module.exports = server;