import { browser, by, element, promise, ElementFinder } from 'protractor';

export class AppPage {
  public navigateTo(): any {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  public getHeaderText(): promise.Promise<string> {
    return element(by.css('.navbar-brand')).getText();
  }

  public getHeader(): ElementFinder {
    return element(by.css('.navbar'));
  }

  public getSidebar(): ElementFinder {
    return element(by.css('.sidebar-container'));
  }

  public getContent(): ElementFinder {
    return element(by.css('.content-container'));
  }

  public getHideButton(): any {
    return element(by.buttonText('Hide'));
  }

  public getShowSidebarButton(): any {
    return element(by.buttonText('Show sidebar'));
  }
}
