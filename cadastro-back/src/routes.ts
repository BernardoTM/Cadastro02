import { Router } from "express";

const routes = Router();

const data =[
    {
      "senha": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "senha": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "senha": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "senha": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "senha": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    }
  ];


  routes.get('/', (req, res) =>{ 
    return res.json(data); 
 
});


routes.get('/user/:id', (req, res) =>{
    const { id } = req.params;
    const client = data[parseInt(id)];
    return res.json(client);
  });
  
routes.post('/addUser', (req, res) =>{
    const body = req.body;
  
    if(!body){
      return res.status(400).end();
    }
    data.push(body);
    return res.json(body);
  });
routes.delete('/delete/:id', (req, res) =>{
    const {id} = req.params;
    data.splice(parseInt(id), 1, );
    return res.send(data);
  });

export default routes;