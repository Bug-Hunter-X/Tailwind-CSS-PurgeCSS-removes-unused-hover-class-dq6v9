The solution involves ensuring that the hover class is used during the build process or whitelisting it in the PurgeCSS configuration.  Here's an example demonstrating the fix by triggering the hover state during the build. 

```javascript
// bugSolution.js
import { render, screen } from '@testing-library/react';
import Button from './Button'; // Your button component

test('Button renders correctly and hover styles are applied', () => {
  render(<Button/>);
  const button = screen.getByRole('button');
  // Simulate a hover event to ensure the class is included during the build.
  fireEvent.mouseOver(button);
  expect(button).toHaveClass('hover:bg-blue-500'); // or your equivalent assertion
});
```
This approach forces the application of the hover state during the testing phase, which guarantees that `hover:bg-blue-500` will be included in the final CSS.  The `fireEvent` method from `@testing-library/react` simulates user interaction.  Adjust the selector to match your specific button implementation.