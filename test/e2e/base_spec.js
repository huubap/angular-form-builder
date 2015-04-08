///**
// * Convenience function for performing a "drag and drop" manuever. The target
// * element may be moved to the location of another element, or by an offset (in
// * pixels).
// * @param {!webdriver.WebElement} element The element to drag.
// * @param {(!webdriver.WebElement|{x: number, y: number})} location The
// *     location to drag to, either as another WebElement or an offset in pixels.
// * @return {!webdriver.ActionSequence} A self reference.
// */
//browser.driver.ActionSequence.prototype.dragAndDrop = function(element, location) {
//    return this.mouseDown(element).mouseMove(location).mouseUp();
//};

describe('Protractor Demo App', function(){
  it('foobar', function(){
    browser.get('http://localhost:9000');
    var item = element(by.css('.fb-form-object-editable'));

    item.click();

    browser.pause();
    var el = $('.popover .fade .right .in')[0];
    browser.driver.wait(protractor.until.elementIsVisible(el));

    var firstOption = $('.handle')[0];

    browser.dragAndDrop(firstOption, {x: 100, y: 100})


  });
});
