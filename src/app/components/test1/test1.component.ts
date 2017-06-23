import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'example-app',
    template: `
        <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
          <input name="first" ngModel required #myfirst="ngModel">
          <input name="last" ngModel>
          <button>Submit</button>
        </form>


        <p>First name value: {{ myfirst.value }}</p>
        <p>First name valid: {{ myfirst.valid }}</p>
        <p>Form value: {{ f.value | json }}</p>
        <p>Form valid: {{ f.valid }}</p>
      `,
})
export class SimpleFormComp {
    onSubmit(f:NgForm) {
        //console.log(f.value);  // { first: '', last: '' }
        //console.log(f.valid);  // false
    }
}