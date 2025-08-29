

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:



---

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


getElementId is used to identify a specific object or text.

getElementByClassName is used when capturing multiple elements and updating as the Dom changes

querySelector is used when the first element matching Css needs to be selected and querySelectorAll is used when all elements matching the Css selector need to be selected.

2. How do you **create and insert a new element into the DOM**?



3. What is **Event Bubbling** and how does it work?

3.The default way in which JavaScript and web browsers propagate an event (such as a click) from the specific HTML element where it occurred through its predecessor elements in the DOM tree to the root of the document.

When an event occurs on an element, the browser handles the event in three phases:
​Capturing Phase: The event starts at the root of the document and moves down to the target element where the event occurred.
​Target Phase: The event reaches the target element. During this phase, any event handlers attached directly to the target element are fired.
​Bubbling Phase: The event travels from the target element back up the DOM tree to the root. During this phase, any event handlers attached to parent elements are also fired. This is called bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique that uses event bubbling to handle events on multiple child elements by adding a single event listener to their common parent. This works by listening to the event at a higher level in the DOM tree, rather than adding a separate listener to each child element.

Event delegation is a powerful technique for many reasons:
​Improved performance: Adding a single listener is much more memory-efficient than adding hundreds or thousands of event listeners. This is especially important for large tables or lists. The less memory used, the faster and more responsive the application becomes.
​Simpler code for dynamic elements: This simplifies the code for dynamically added elements. If you later add new child elements to the parent (e.g., through an API call or user action), you don't have to add new event listeners for each of them. A single listener on the parent will automatically handle the events of the new elements due to bubbling.
​Easier management: This makes your code cleaner and easier to manage. You don't have to track multiple listeners, which can clutter the code and introduce bugs. It centralizes event handling for all elements in a group.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

The main difference between the two methods is:
​preventDefault() stops the default behavior of an event. For example, if a link is clicked, the browser will go to a new page, using preventDefault() will stop this behavior.
​stopPropagation() stops the propagation or bubbling of an event. This ensures that when an event travels up or down the DOM tree, it does not affect any elements above or below it.

