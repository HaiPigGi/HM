module.exports ={
    home(req,res){
        res.render("home",{
            url: 'http://localhost:8000/',
            userName: req.session.username,
        });
    }
}