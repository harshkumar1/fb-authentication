import { FbAuthenticationPage } from './app.po';

describe('fb-authentication App', () => {
  let page: FbAuthenticationPage;

  beforeEach(() => {
    page = new FbAuthenticationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
