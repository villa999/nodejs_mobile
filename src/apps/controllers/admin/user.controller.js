const login = function(req,res){
     const a = [0,1,2]
     res.render("test", {a:a})
}

module.exports = {
     login
}