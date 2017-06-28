import { Component } from '@angular/core';

import { Hero2 }    from '../../model/hero2';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero2(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero() {
        this.model = new Hero2(42, '', '');
    }

    skyDog():Hero2 {
        let myHero = new Hero2(42, 'SkyDog',
            'Fetch any object at any distance',
            'Leslie Rollover');
        console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
        return myHero;
    }

    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form:any) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    }

    /////////////////////////////

}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */