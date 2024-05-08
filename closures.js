function nums(){
    let a = 2;
    console.log({a});

    function add() {
        const b = 3;
        console.log({sum: a+b});
        return 'Ola'

        
    }
    add();
}
nums();