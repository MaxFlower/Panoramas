import { AppPage } from './app.po';

describe('E2E for testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display header, sidebar and content areas', () => {
    expect(page.getHeaderText()).toContain('Favourite');
    expect(page.getHeader().isPresent()).toBeTruthy();
    expect(page.getSidebar().isPresent()).toBeTruthy();
    expect(page.getContent().isPresent()).toBeTruthy();
  });

  it('should click button HIDE on sidebar', () => {
    expect(page.getSidebar().isPresent()).toBeTruthy();
    expect(page.getShowSidebarButton().isDisplayed()).toBeFalsy();
    page.getHideButton().click();
    expect(page.getShowSidebarButton().isDisplayed()).toBeTruthy();
  });

  it('should click button SHOW SIDEBAR on header', () => {
    page.getHideButton().click();
    expect(page.getSidebar().isPresent()).toBeTruthy();
    expect(page.getHideButton().isDisplayed()).toBeFalsy();
    page.getShowSidebarButton().click();
    expect(page.getShowSidebarButton().isDisplayed()).toBeFalsy();
  });
});
