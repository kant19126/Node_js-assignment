var http = require('http');                         //creating http
var fs = require('fs');                             //getting file system
http.createServer(function(req,res){                 
    fs.readFile('kanthavelu.html',function(err,data){        
        if(err){
            return console.log(404,'error');
        }
        
        res.write(data)  
        res.end()
    })   
    const url=req.url;
    const method =req.method;
    if(url==='/home' &&  method==='POST'){   //if url contains /home and method should be POST
        let body='';
        req.on('data',(chuck)=>{
            body+=chuck ;

        });
        req.on('end',()=>{
            const input=body.split('&');
            let username=input[0].split('=')[1];
            let password=input[1].split('=')[1];
            if(username=='kanthavelu' && password=='08.10.2001'){
                fs.readFile('home.html',function(err,data){   
                    res.write(data) 
                    res.end()
                })      

            }
            else{
                res.end('Authenrication failed');
            }
            
        })
    
    }


}).listen(8080)
