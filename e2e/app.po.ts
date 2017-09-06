import { browser, by, element } from 'protractor';

export class Angular4ProtractorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getSpanTextByTag() {
    return element(by.css('h2')).getText();
  }
  
  getSpanTextByClass() {
    return element(by.css('.spanclass')).getText();
  }

  clickButton() {
    return element(by.id('buttonid')).click();
  }

  getLikesCount() {
    return element(by.css('.likesClass')).getText();
  }

  getTimeoutButton() {
      return element(by.css('.triggertimeout'));
    };

  getTimeoutElement() {
    let elem = element(by.css('.dynamic-text'));
    browser.wait(function() {
      return browser.isElementPresent(by.css('.dynamic-text'));
    }, 5000);
    return elem;
  
  }

  getInputElement() {
    return element(by.id('input-id'));
  }
  textInput() {
    return this.getInputElement().sendKeys('hello input box')
  }

  getMenuItems() {
    return element.all(by.css('.menu-items'));
  }

  getMenuText(menuIndex:number) {
    return this.getMenuItems().get(0).element(by.css('.submenu')).getText();
  }
}
