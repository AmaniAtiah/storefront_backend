import express, { Application, Request, Response } from 'express';
import routes from './routes/index';
import errorMiddleware from './middleware/error.middleware';


const app: Application = express();



app.use(express.json())

const port = 3000;


 app.use('/api', routes);


app.get('/', (req: Request, res: Response) => {

    res.send('Hello World' )
})

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});




 export default app;
