import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './todo/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Task[], args: string): Task[] {

    return value.filter(el=>el.title.startsWith(args));
  }

}
