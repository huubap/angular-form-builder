describe 'Protractor Demo App', ->
  it 'Should have a title', ->
    browser.get('http://juliemr.github.io/protractor-demo/')
    expect(browser.getTitle()).toEqual('Super Calculator')
