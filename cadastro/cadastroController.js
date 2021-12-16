const express = require("express")
const router = express.Router()
const Users = require("./cadastro")

router.get("/admin/cadastro",(req,res)=>{
    res.render("admin/cadastro/new")
})

router.post("/admin/cadastro/save",(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let department = req.body.department;
    let Er_User = false;
    let Reg_User = false;

    if((name != undefined) && (email != undefined) && (password != undefined) && (department != undefined)){
        Users.create({
            name : name,
            email : email,
            password : password,
            department : department,
            Er_User : Er_User,
            Reg_User : Reg_User
        }).then(()=>{
            res.redirect("/admin/cadastro")
        })
    }else{
        res.redirect("/admin/cadastro")
    }
})

module.exports = router;
