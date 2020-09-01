import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {
  constructor() {}

  public arrayMultiply(myArray: number[]): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }

  public arraySeparate(myArray: any): Array<string> {
    let con = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "string") {
        con[j] = myArray[i];
        j++;
      }
    }
    return con;
  }

  public arraySplit(str: string): Array<number> {
    const temp = str.split(",");
    const arr = [];
    let a = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          arr[a] = y;
          a++;
        }
      }
    }
    return arr;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0) {
        myArray[i] = 3;
      }
    }
    return myArray;
  }
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
