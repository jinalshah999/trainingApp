import { DefaultUrlSerializer, UrlTree } from '@angular/router';
export class lowercaseconvert extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
      return super.parse(url.toLowerCase());
    }
}
