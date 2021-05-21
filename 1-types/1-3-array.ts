{

    // Array
    const fruits: string[] = [ 'tomato', 'banana' ];
    const scores: number[] = [ 1, 3, 4 ];
    function printArray(fruits: readonly string[]) {}

    // Tuple -> interface, type alias, class로 대체해 사용
    let student: [ string, number ];
    student = [ 'name', 123 ];
    student[0] // name
    student[1] // 123
    // 가독성 저하
    const [ name, age ] = student;

}