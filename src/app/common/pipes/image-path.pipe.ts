import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  public transform(fileName: string): string {
    return `assets/images/${fileName}`;
  }

}
