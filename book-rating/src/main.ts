import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  ///////////////////////

export class Foo {
  constructor(c: Customer) {}
}

export class Customer {
  /*id: number;

  constructor(id: number) {
    this.id = id;
  }*/

  constructor(public id: number) {}

  fooBar(arg: number): string {
    const x = new Foo(this);

    setTimeout(() => {
      console.log('ID ist', this.id);
    }, 2000);

    return '';
  }
}

const myCustomer = new Customer(3);
myCustomer.fooBar(4);




/*
const bar = function (arg) {
  return arg + 1;
}

const bar2 = arg => arg + 1;

function routine(cb: (foo: number) => number) {}
routine(arg => arg + 1)
*/
