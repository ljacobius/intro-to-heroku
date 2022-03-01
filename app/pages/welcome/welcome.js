import {Component} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/welcome/welcome.html'
})
// @Component({
//     selector:'welcome-page'
//     templateUrl: 'build/pages/welcome/welcome.html'
// })
export class WelcomePage {
    userFullName: string = "";
    userEmail: string = "";




    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

    download() {
        console.log('this.userFullName',this.userFullName);
    }

}