declare let age: number;
declare let hobby: string;
declare let isAdult: boolean;
declare let fruit: any;
declare let fruits: string[];
declare let arr: any[];
declare let numArr: number[][];
declare let employee: [number, string];
declare let employees: [number, string][];
declare let car1: {
    brand: string;
    year: number;
};
interface Car1 {
    brand: string;
    year: number;
}
declare let newCar: Car1;
declare let x: string | number;
type occupation = "employed" | "student";
declare let jackOccupation: occupation;
declare let y: any;
declare function add(x: number, y: number): number;
declare function sayHi(): void;
declare function copyArr<T>(arr: T[]): T[];
declare let numCopy: number[];
declare let strCopy: string[];
declare enum EyesColor {
    brown = "Common eye color",
    blue = "Rare eye color",
    green = "VeryRare eye color"
}
declare function displayStudent(student: Student): void;
interface Student {
    name: string;
    age: number;
    eyeColor: EyesColor;
}
//# sourceMappingURL=index.d.ts.map