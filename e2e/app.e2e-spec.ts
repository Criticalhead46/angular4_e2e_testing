import { Angular4ProtractorPage } from './app.po';

describe('angular4-protractor App', () => {
  let page: Angular4ProtractorPage;

  beforeEach(() => {
    page = new Angular4ProtractorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
