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
        this.userFullName = '';
        this.userEmail=''
    }

    keyUpEmail(i) {
        console.log('email',i)
        this.userEmail = i
    }

    download() {
        console.log('this.userEmail',this.userEmail);
        var link = document.createElement("a");
        link.download = "userDetails.json";
        var details = {fullName: 'Johnny Doe', email: 'johnny@ownbackup.com'}
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(details));
        link.href = "data:" + data;
        link.click();
        // console.log('this.userFullName',this.userFullName);
    }

}