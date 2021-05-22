{
    
    // Type Assertions 💩
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length); // Assertion -> 컴파일 에러는 없으나 undefined
    console.log(String(result).length); // Casting -> 1

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱 error

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // undefined가 아니라 배열이라고 장담할 때 ! 선언, 절대적으로 확신 -> 😱 위험

}