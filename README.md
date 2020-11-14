### Dependencies
1. npx-create-react-app
2. npm install
3. npm i redux redux-saga react-redux redux-logger
 

### Technical Decision
How did you implement styling? What are the pros and cons? Why did you chose this approach?
Answer:
I just make it simple. I wrote Js files and put in separate folders in components folder, then I wrote Css files in each elements that you can see on the screen. It is easier for me when I write the function first, then styling it later but sometimes I do it at the same time such as for the highlighted issues. 

How did you share state between components? What are the pros and cons? Why did you chose this approach?
Answer:
I pass State as Props to child components. I chose this approach because I studied it before.

Did you use React hooks? Why or why not?
Answer:
Yes, I used it in notification component.With hooks, the component maintain its own internal state data can be simplified to half the lines of code.

What would you improve?
Answer:
I improved my react, redux skills , studied new dependencies such us redux-saga even though I tried to use it in this challenge but it is not really useful. it helps to handle side-effects. 

How did you prevent wasted renders?
Answer:
Using Handle function. Avoid passing a new reference for the same old data. Making Data Immutable.

How did you handle side-effects (e.g. data fetching)?
Answer:
Using redux-saga.