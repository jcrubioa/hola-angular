import { HolaAngularPage } from './app.po';

describe('hola-angular App', function() {
  let page: HolaAngularPage;

  beforeEach(() => {
    page = new HolaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
