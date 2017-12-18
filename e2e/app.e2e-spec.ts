import { AppPage } from './app.po';

describe('untitled App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header, sidebar and content', () => {
    page.navigateTo();
    expect(page.getHeader()).toEqual('Favourite');
  });
});
