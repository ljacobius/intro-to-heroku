import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {
    name: string = "";
    email: string = "";


    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

    download() {
        console.log('this.name',this.name)
        console.log('this.email',this.email)
    }

}