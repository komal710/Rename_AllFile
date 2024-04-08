const fs = require('fs');
const path= require('path');
const replacethis = "komal"
const replacewith = "Komal"
const preview = true
const folder = __dirname

try{
    fs.readdir(".",(err, data)=>{
        // console.log(data);
        for(let index = 0; index < data.length; index++){
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder,item.replaceAll(replacethis,replacewith))
            if(!preview){
            fs.rename(oldFile, newFile, ()=>{
                console.log("Rename Success")
            })
        }
        else{
            if("data/"+item !== newFile) console.log("will be renamed to " + newFile) 
        }
        
    } 
    })
    
} catch(err){
    console.log(err);
}