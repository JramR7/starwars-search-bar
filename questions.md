# Deel React questionnaire

##### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

On a component, you have to state shouldComponentUpdate and it will re-render whenever shouldComponentUpdate is called. On the other hand, PureComponent handles shouldComponentUpdate by itself, running a shallow comparisson on both the component props and state. Shallow comparisson only compares values or references (which does not work well with arrays and objects), which might led to re-rendering issues or even infinite re-rendering if not handled correctly.

##### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

shouldComponentUpdate tells the component when to re-render, so if legacy context values change, and shouldComponentUpdate don't let the component re-render, it will block the context propagation. and the childs of this component won't have the values updated. This only happens on the legacy context API, the new context API has this behavior sorted out.

##### 3. Describe 3 ways to pass information from a component to its PARENT.

- You can create a function that recieves a parameter, send it via props to the child, and call it inside the children with the data you want to access. ending up in having the function expose the parameter to the parent component.
- You can use a useState hook (or setState if using classes), create a function (like the previous point) that uses the setter for a given value, and access the value on the parent.

```
const Parent = () => {
    const [value, setValue] = useState();
    console.log('this is the child's value', value);
    const callback = (childValue) => {
        setValue(childValue);
    }
    return <Child setterCallback={callback}/>;
}
```

- Also with Redux you can basically pass any information you want stored on the redux state, so you can update any state in a child and access it on the parent using a selector.

##### 4. Give 2 ways to prevent components from re-rendering.

- React.memo is a HOC that allows to memoize a component to avoid re-rendering if the props of a component haven't changed, it runs a shallow comparisson of the component props, and you can also add a custom function to do the comparisson yourself if you need to (for nested objects and arrays).
- Using memoization hooks like useMemo and useCallback, you can make values and functions used in your componentto only change if there's a change on the props (specifically on the dependency array).

##### 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment (<>) is basically used to wrap components without using and extra DOM node like <div>, avoiding unnecesary dom elements, and also avoiding the app from breaking when returning multiple components.

##### 6. Give 3 examples of the HOC pattern.

- React.memo, a HOC used to memoize components by comparing it's props.
- Redux connect, returns a component that can access access and modify Redux states.
- withRouter is a HOC used to provide a component with the history and route of the routing provider.

```
const Component = () => {
    return <div/>
};
const memoizedComponent = React.memo(Component);
const ConnectedComponent = connect(selectors, actions)(Component);
const componentWithRouter = withRouter(Component);
```

##### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

- Callbacks where the first way to handle asynchronous code and it basically consists on chaining a callback as a parameter to the response of some asynchronous code, so you could basically create any callback and handle the error as you wanted, but usually it ended up in "callback hell", having just too many nested callbacks and making the code specially hard to mantain.
- On promises you usually use .then() to handle the success and .catch((error) => handleError) to handle the error, although it's easier to use than callbacks using this chaining might led to a "callback hell" if there's too many chains.
- To solve all this callback hell, now you can use Async await, to manually wait on a promise until it gets resolved, and you can wrap it on a try catch to just handle any exception that might happen or mix it with a .catch() to handle the errors inside the promis to avoid the try catch method.

##### 8. How many arguments does setState take and why is it async.

SetState has two arguments, but the most used is the first one, which might be the object you want to merge to your state or a callback that modifies the state, the second (less used) is a callback that is called immediately after setState is called, usually used to access the updated state "immediately" instead of waiting for a re-render.

##### 9. List the steps needed to migrate a Class to Function Component.

- Change the Class to a function
- Remove the constructor, and replace all state handling by using useState hooks
- Replace setState with the useState setter (remember useState setter does not merge the objects, it replace the whole state value).
- If using the second param of setState to handle side effects, remove them and replace it with a useEffect
- Change all the this references inside the class, and convert the methods into normal functions.
- Replace your lifeCycle methods with useEffect, and modify the dependency array accordingly. Remember useEffect callback return is called when the component unmounts.

##### 10. List a few ways styles can be used with components.

- Inline styles: You can add an object to the component's style prop `<div style={{margin: '2px'}}></div>`, this is my least favorite method, it makes the code (In my opinion) hard to read and desorganized.
- CSS stylesheets: You can create a file for each component and you can write normal css using classes, ids and other identifiers, then importing it into your js files as css files.
- styled components: it allows you to reuse a lot of your styles and create components that use those styles by default.

##### 11. How to render an HTML string coming from the server.

You can use dangerouslySetInnerHTML prop to inject html string into a component and to remember all devs that is a dangerous method. Alternatively you can use a parser like react-html-parser, which basically renders those elements inside the string. None of this props or libraries are safe from crossSite script attacks, so it's a good practice to use XSS sanitizers (or create one).
