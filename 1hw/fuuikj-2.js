function hanoi(disks){
    if ( disks === 1){
        return 1;
    }else{
        return 2 * hanoi(disks - 1) + 1;
    }
}
console.log(hanoi(3));