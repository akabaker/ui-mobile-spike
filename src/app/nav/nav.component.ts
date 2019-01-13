import { Component, OnInit, ViewChild } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    @ViewChild('navList') navList;
    public showList = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    showNavigation() {
        // console.log(this.navList.nativeElement.children);
        this.showList = !this.showList ? true : false;
        console.log(this.showList);
    }
}
