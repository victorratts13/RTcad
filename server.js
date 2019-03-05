const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const data = Date();
app.use(cors());

const 
SELECT_ALL_CFDA = 'SELECT * FROM CFDA',
SELECT_ALL_CDD = 'SELECT * FROM CDD';
SELECT_ALL_GDM = 'SELECT * FROM CDG';
const connection = mysql.createConnection({
    host: '192.168.100.23',
    user: 'root',
    password: 'root',
    database: 'RTcad'
})

connection.connect(err =>{
    if(err){
        console.log('error ao conectar -> '+ err)
    }else{
        console.log('sucesso')
    }
})

app.get('/api/addCFDA', (req, res) => {
    const { nome, sobrenome, depart } = req.query;
    const INSERT_CFDA_VALUE = `INSERT INTO CFDA (nome, sobrenome, depart, data) VALUES ('${nome}','${sobrenome}','${depart}','${data}')`;
    connection.query(INSERT_CFDA_VALUE, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send('dados adicionados');
        }
    });
});

app.get('/api/addCDD', (req, res) => {
    const { depart, area} = req.query;
    const INSERT_CDD_VALUE = `INSERT INTO CDD (depart, area, data) VALUES ('${depart}','${area}','${data}')`;
    connection.query(INSERT_CDD_VALUE, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send('dados adicionados');
        }
    });
});

app.get('/api/addGDM', (req, res) => {
    const { depart, descr, valor } = req.query;
    const INSERT_CDG_VALUE = `INSERT INTO CDG (depart, descr, valor) VALUES ('${depart}','${descr}','${valor}')`;
    connection.query(INSERT_CDG_VALUE, (err, results) => {
        if(err){
            return res.send(err)
        }else{
            return res.send('dados adicionados');
        }
    });
});

app.get('/apiCFDA', (req, res) => {
    connection.query(SELECT_ALL_CFDA, (err, results) =>{
        if(err){
            return res.send('erro de conexão -> '+err)
        }else{
            return res.json({
                data: results
            })
        }
    })
});
app.get('/apiCDD', (req, res) => {
    connection.query(SELECT_ALL_CDD, (err, results) =>{
        if(err){
            return res.send('erro de conexão -> '+err)
        }else{
            return res.json({
                data: results
            })
        }
    })
});
app.get('/apiGDM', (req, res) => {
    connection.query(SELECT_ALL_GDM, (err, results) =>{
        if(err){
            return res.send('erro de conexão -> '+err)
        }else{
            return res.json({
                data: results
            })
        }
    })
});


app.listen(3300, function(){
    console.log('servidor executado');
});