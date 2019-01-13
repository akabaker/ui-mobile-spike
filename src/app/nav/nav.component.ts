import { Component, OnInit, ViewChild } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    @ViewChild('navList') navList;
    public menuIsActive = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleMenu() {
        this.menuIsActive = !this.menuIsActive ? true : false;
    }
}
