/**
 * Unit test to test the optin directive
 */

describe('optIn', function() {
  var scope,
    element,
    compiled,
    html;

  beforeEach(module('loginForm'));
  beforeEach(module('optin/optin.template.html'));

  beforeEach(inject(function($rootScope, $compile) {

    // Set the mock HTML
    html = '';
    html += '<opt-in class="small-12 columns">';
    html += '<div class="brand-logo"></div>';
    html += '</opt-in>';

    // Create a new scope
    scope = $rootScope.$new();

    // Compile the HTML
    compiled = $compile(html);

    // Add the compiled html to the scope
    element = compiled(scope);

    // Run digest cycle to apply the changes
    scope.$digest();

  }));

  it('should render the element correctly', function(){

    // Expect to find one form element
    expect(element.find('form').length).toBe(1);
    // Expect to find 3 input elements
    expect(element.find('form input').length).toBe(3);
    // Expect to find 1 button
    expect(element.find('form button').length).toBe(1);
    // Expect the transcluded content to be present
    expect(element.find('span').children('.brand-logo').length).toBe(1);
  });
});
