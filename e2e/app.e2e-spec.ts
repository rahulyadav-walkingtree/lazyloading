import { LazyloadingPage } from './app.po';

describe('lazyloading App', () => {
  let page: LazyloadingPage;

  beforeEach(() => {
    page = new LazyloadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
