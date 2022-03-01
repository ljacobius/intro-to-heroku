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
    // userFullName: string = "";
    // userEmail: string = "";




    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

    download() {
        console.log('fullName',document.getElementById('fullName').value);
        var link = document.createElement("a");
        link.download = "userDetails.json";
        var details = {fullName: 'John Doe', email: 'john@ownbackup.com'}
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(details));
        link.href = "data:" + data;
        link.click();
        // console.log('this.userFullName',this.userFullName);
    }

}