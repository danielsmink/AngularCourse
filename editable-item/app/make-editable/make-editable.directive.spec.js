/**
 * Unit test to test the make-editable directive
 */

describe('makeEditable', function() {
  var scope,
    element,
    compiled,
    html;

  beforeEach(module('editableItem'));
  beforeEach(module('make-editable/make-editable.template.html'));

  beforeEach(inject(function($rootScope, $compile) {

    // Set the mock HTML
    html = '';
    html += '<div make-editable>';
    html += '<p>Content that will become editable when the directive rendered.</p>';
    html += '</div>';

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

    // Expect to find 1 button
    expect(element.find('button').length).toBe(1);
    // Expect to find a div with the editable content inside
    expect(element.children('.edit-me').length).toBe(1);
    // Expect the editable content to be inside
    expect(element.children('.edit-me').find('p')[0].innerHTML)
      .toBe('Content that will become editable when the directive rendered.');
  });

  it('should and editItem object in the scope', function(){

    // editItem object should be defined
    expect(element.scope().editItem).toBeDefined();
    // editItem object should have an edit function
    expect(element.scope().editItem.edit).toBeDefined();
    // editItem object should have a sav
    // e function
    expect(element.scope().editItem.save).toBeDefined();
    // Check initial editable status
    expect(element.scope().editItem.status).toBe('saved');
  });
});
