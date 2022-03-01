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

    keyUpName(i) {
        this.userFullName = i
    }

    keyUpEmail(i) {
        this.userEmail = i
    }

    download() {
        var link = document.createElement("a");
        link.download = "userDetails.json";
        var details = {fullName: this.userFullName, email: this.userEmail}
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(details));
        link.href = "data:" + data;
        link.click();
        // var installer = document.createElement('a');
        // installer.setAttribute('type', 'hidden');
        // installer.href = '../../services/install.sh';
        // installer.download = path;
        // document.body.appendChild(installer);
        // installer.click();
        // installer.remove();


    }

}