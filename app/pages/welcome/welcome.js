import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/welcome/welcome.html'
})
export class WelcomePage {
    userDetails = {
        name: '',
        email: '' 
    }



    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

    download(form) {
        console.log('this.name',form.value);
    }

}