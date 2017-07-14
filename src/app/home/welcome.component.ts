import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
