import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persoPipe'
})
export class PersoPipePipe implements PipeTransform {

  transform(ch: string): string {
    return ch+"-Tunisie";
  }

}
