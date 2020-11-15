### Dependencies
1. npx-create-react-app
2. npm install
3. npm i redux redux-saga react-redux redux-logger
 

### Technical Decision
How did you implement styling? What are the pros and cons? Why did you chose this approach?
Answer:
I just make it simple. I wrote Js files and put in separate folders in components folder, then I wrote Css files in each elements to decorate that component. 
pros: it is easy to implement styling and decorate for the application.
cons: it takes time when you styling an application if you don't have experiences with it before. 
This is the way that I studied in my school and my online courses, so I applied it.

How did you share state between components? What are the pros and cons? Why did you chose this approach?
Answer:
Using Props to pass data from parent to child components.
Using State management library like Redux. By using redux, the application state will be stored in a single place known as Store. 
I studied it in a modern react-redux course.

Did you use React hooks? Why or why not?
Answer:
Yes, I used it in notification component on this react challenge. With hooks, the component maintain its own internal state data can be simplified to half the lines of code.

What would you improve?
Answer:
I improved my react, redux skills, and studied new dependencies such us redux-saga even though I tried to use it in this challenge but it is not really useful. it helps to handle side-effects. 

How did you prevent wasted renders?
Answer:
Using Handle function. Avoid passing a new reference for the same old data. Making Data Immutable.

How did you handle side-effects (e.g. data fetching)?
Answer:
Using redux-saga. it is a library that aims to make application side effects easier to manage, more efficient to execute, easy to test, and better at handling failures. It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test.