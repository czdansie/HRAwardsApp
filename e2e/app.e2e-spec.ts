import { HRAWARDSAPPPage } from './app.po';

describe('hr-awards-app App', function() {
  let page: HRAWARDSAPPPage;

  beforeEach(() => {
    page = new HRAWARDSAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
