let val: number = 2;
let val2: number = 5;

const func = () => {
    return 5;
}

function reverseString(s: string) {
    if(s.length == 0) return s;
    let chars: string[] = [...s];
    for(let i: number = 0; i < chars.length/2; i++) {
        let temp: string = chars[i];
        chars[i] = chars[chars.length - i - 1];
        chars[chars.length - i - 1] = temp;
        console.log(chars);

    }
    console.log(chars);
}

class Student {
    fullName: string;

    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function doSomething(val: string): string {
    return 'hello, world';
}

reverseString("abcdefg");