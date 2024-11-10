import { expect } from '@wdio/globals'
import LoginPage from "../pageobjects/login_page.js"
import allure from '@wdio/allure-reporter';
import fs from 'fs';
import login_page from '../pageobjects/login_page.js';

describe("Login Page Test", ()=> {

    it("User can visit the URL", async()=>{
        
       await LoginPage.visitURL();
       await browser.pause(2000);
       expect(browser).toHaveUrl("https://servicestage.morguardgf.com:4001/login");
    })

    
    it("User should not login with invalid mail", async()=>{
        
      await LoginPage.userLoginSystem("codemen.aditya","Codemen123!!");
      await browser.pause(2000);
      expect("div[class='err-text']").toHaveText("Please enter a valid email address.");
      await login_page.emailElement.clearValue();


   })

   it("User should not login with blank mail & password", async()=>{
        
      await LoginPage.userLoginSystem("codemen.aditya","Codemen123!!");
      await browser.pause(2000);
      allureReporter.addTag("fixme");
      expect("div[class='err-text']").toHaveText("Please enter a valid email address."); 
      await login_page.emailElement.clearValue();
      expect("////body/div[@id='__next']/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]").toHaveText("Please enter a valid email address.");
      await login_page.emailElement.clearValue();

   })


    it("User can login with valid credentials", async()=>{
        
        await LoginPage.userLoginSystem("codemen.aditya@gmail.com","Codemen123!!");
        await browser.pause(2000);
        expect(browser).toHaveUrl("https://servicestage.morguardgf.com:4001/common-forms");
        await browser.pause(40000);
 
 
     })


})