import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet>        
        </router-outlet>
    `,
    styleUrls : ['app/app.component.css']
})
export class AppComponent implements OnInit {

    title = "Tour of heros ";

    constructor() { }

    ngOnInit() { }
}