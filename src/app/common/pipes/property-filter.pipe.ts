import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyFilter'
})
export class PropertyFilterPipe implements PipeTransform {

  public transform(collection: {}[], propertyName: string, propertyValue?: string): {}[] {
    if (!propertyValue) {
      return collection;
    }

    return collection.filter((item: {}) => item[propertyName] === propertyValue);
  }


}
