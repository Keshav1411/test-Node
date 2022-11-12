const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
        return
    }
    const first= result;
    writeFile(
        './content/result-sync.txt',
        `Here is the result : ${first}`,
        (err,result)=>{
            if(err){
            console.log(err)
            return
        }
        console.log(result);
        }
    )
})

