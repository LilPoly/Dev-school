function findNb(m){
    let n = 1;
    let volume = 1;
    
    while(volume < m){
        n++;
        volume += Math.pow(n, 3)
    }

    if( volume === m){
        return n;
    }else{
     return (-1);
    }
}
console.log(findNb(1071225));
console.log(findNb(91716553919377));