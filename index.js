const express = require("express")
const connection = require("./database/database")
const bodyParser = require("body-parser")
const app = express()

//view engine 
app.set('view engine', 'ejs')

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//importing routers
const CadastroController = require("./cadastro/cadastroController")
app.use("/", CadastroController)

//static
app.use(express.static('public'))

//database
connection
    .authenticate()
    .then(()=>{
        console.log("conexão com DB realizada com sucesso")
    }).catch((erro)=>{
        console.log(erro)
    })

const Users = require("./cadastro/cadastro")

app.listen(7000,()=>{
    console.log("funcionando")
})