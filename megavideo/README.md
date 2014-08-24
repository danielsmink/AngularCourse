# megaVideo directive

## What is isolate scope, and why might you need it?

By setting the scope attribute to true you create an isolated scope. This is important when you want to use the directive multiple times on the same page. If you wouldn't create an isolated scope both will load with the properties from the second element.

By using an isolated scope both directive instances get a copy of the the parent scope, which it can manipulate without effecting the others.