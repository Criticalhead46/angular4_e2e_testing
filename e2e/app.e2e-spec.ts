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

  it('should display span message by tag', () => {
    page.navigateTo();
    expect(page.getSpanTextByTag()).toBe('Angular');
  });

  it('should display span message by class name', () => {
    page.navigateTo();
    expect(page.getSpanTextByClass()).toBe('Angular');
  });
  it('should increment th likes count on button click', () => {
    page.navigateTo();
    page.clickButton();
    expect(page.getLikesCount()).toBe('1');
  });

  it('should find the dynamic text', () => {
  page.getTimeoutButton().click();
    
    expect(page.getTimeoutElement().isPresent()).toBeTruthy();
  });

  it('should input box have type text', () => {
page.textInput();
expect(page.getInputElement().getAttribute('value')).toBe('hello input box')
  });

  it('should display first menu in the list', () => {
    expect(page.getMenuText(0)).toBe('menu 1');
  })
});
