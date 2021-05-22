{
    
    // Type Inference
    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');

    function add2(x: number, y: number) {
        return x + y;
    }
    // result = number로 자동 typing
    const result = add(1, 2); 
    
}