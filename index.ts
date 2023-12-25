function displayValue(value: string | number): void {
    console.log(value);
}

displayValue("Hello, TypeScript!");
displayValue(42);

function getStringOrNumber(flag: boolean): string | number {
    return flag ? "Yes" : 42;
}

let valll = 'hi';
type Special = number | string;
let variable: Special;
variable = 'hello, ts';
variable = 25;

