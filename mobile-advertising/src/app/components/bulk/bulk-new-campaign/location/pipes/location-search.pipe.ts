import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationSearch'
})
export class LocationSearchPipe implements PipeTransform {

  transform(value: any, key: string): any {

    //Array is passed by reference so a copy should be made
    var newArray = value.slice();

    for (let i = 0; i < newArray.length; i++) {
      if(!(newArray[i].toLowerCase()).includes(key.toLowerCase())){
        newArray.splice(i,1);
        i--;
      }
    } 

    return newArray;
  }

}
