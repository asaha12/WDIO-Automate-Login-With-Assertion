import { $ } from '@wdio/globals'
import Page from './page.js';

class loginPageElementsAction{

get selelctPremisebtn(){
    return $("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/button[1]");

}

get emailElement(){
    return $("#userEmail");
}

get passwordElement(){
    return $("#userPassword");
}

get loginbtnElement(){
    return $("#loginButton");
}

async clickonPremisebtn(){
    (await this.selelctPremisebtn).click();
}

async setvalueEmail(email){
    await this.emailElement.setValue(email);
}

async setvaluePassword(password){
    await this.passwordElement.setValue(password);
}

async clickonloginBtn(){
    await this.loginbtnElement.click();
}
async visitURL(){
    await browser.url("https://servicestage.morguardgf.com:4001/login");
}


//Major Functinlity
async userLoginSystem(email,password){
    await this.clickonPremisebtn();
    await this.setvalueEmail(email);
    await this.setvaluePassword(password);
    await this.clickonloginBtn();
    await browser.pause(30000);

}


}

export default new loginPageElementsAction();