outer: for(let i = 0; i < 5; i++){
   inner:for(let j = 0; j < 5; j++){
        console.log(i,j)
        if(j > i){
            console.log("跳出循环")
            continue outer;
        }
        
    }
}


