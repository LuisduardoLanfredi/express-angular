import { DebulhadorPage } from './app.po';

describe('debulhador App', function() {
  let page: DebulhadorPage;

  beforeEach(() => {
    page = new DebulhadorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
