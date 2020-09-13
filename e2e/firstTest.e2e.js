describe('MyApp', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('welcome'))).toBeVisible();
    await element(by.id('myButton')).tap();
    await expect(element(by.text('button pressed'))).toBeVisible();
  });
});
