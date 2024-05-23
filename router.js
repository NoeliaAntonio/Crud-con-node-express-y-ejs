//aca vamos a crear nuestras rutas

const express = require('express');//creamos una constante express
const router = express.Router();//creamos una constante router

const conexion = require('./database/db');
router.get('/',(req,res)=>{//apenas acceda a la raiz  se va a conectar a la base de datos//
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index.ejs', {results:results});
           //res.render('pu.pug', {results:results});            
        }   
    })
})

    router.get('/create', (req,res)=>{
        res.render('create');
    })
    
    router.get('/edit/:id', (req,res)=>{    
        const id = req.params.id;
        conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
            if (error) {
                throw error;
            }else{            
                res.render('edit.ejs', {user:results[0]});            
            }        
        });
    });
    
    router.get('/delete/:id', (req, res) => {
        const id = req.params.id;
        conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
            if(error){
                console.log(error);
            }else{           
                res.redirect('/');         
            }
        })
    });
    
    const crud = require('./controllers/crud');
    
    router.post('/save', crud.save);
    router.post('/update', crud.update);
  
  
  
  
  
  
    // res.render('index');//agregamos la vista en la carpeta wiews
   
    /* conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        }else { res.send(results);}//envia los resultados //
    })*/
    



module.exports = router;
