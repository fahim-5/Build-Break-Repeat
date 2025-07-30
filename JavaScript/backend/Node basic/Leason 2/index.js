const fs =require('fs');

fs.writeFile('demo.txt', 'hello word', (err) => {
    if(err){
        console.log(err);

    }else{
        console.log("first file created successfully");
    }
})