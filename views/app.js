const express= require ('express');  //con esto referenciamos a express
const app = express();// inbocamos  a express


//definimos el motor de plantillas
app.set('view engine','ejs');
//app.set('view engine','pug');


app.use(express.urlencoded({extended:false}));
app.use(express.json());


//hacemos referencia a mi enrutador
app.use('/', require('./router'));


//invocamos los metodos de express
app.listen(5000,()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});

