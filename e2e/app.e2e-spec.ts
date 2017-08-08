import { AngularprojectPage } from './app.po';

describe('angularproject App', () => {
  let page: AngularprojectPage;

  beforeEach(() => {
    page = new AngularprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
