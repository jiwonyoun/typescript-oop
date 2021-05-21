{

    // Type Aliases
    type Text = string;
    const name: Text = 'ellie';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    }
    const student: Student = {
        name: 'ellie',
        age: 15
    }

    // String Literal Types
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name'; // 타입이 Name이므로 다른 문자열 할당 불가
    type JSON = 'json';
    const json: JSON = 'json';

    type Bool = true;
    const isCat: Bool = true; 

}