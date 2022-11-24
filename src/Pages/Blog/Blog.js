import React from 'react';

const Blog = () => {
    return (
        <div className="my-56">
      <h2 className="text-center text-4xl my-10">Blog</h2>
      <div className="mx-24">
        {/* question-1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            01. What are the different ways to manage a state in a React application?
          </div>
          <div className="collapse-content text-lg">
            <p>There are four main types of state you need to properly manage in your React apps:-</p>
            <ul>
              <li>1. Local state</li>  
              <li>2. Global state</li>  
              <li>3. Server state</li>  
              <li>4. URL state</li>  
            </ul>
            <p><strong>Local(UI)state– </strong>Local state is data we manage in one or another component.</p>
            <p><strong>Global(UI)state– </strong>Global state is data we manage across multiple components.</p>
            <p><strong>Server state– </strong>Data that comes from an external server that must be integrated with our UI state.</p>
            <p><strong>URL state– </strong>Data that exists on our URLs, including the pathname and query parameters.</p>
          </div>
        </div>
        {/* question-2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            02. How does prototypical inheritance work?
          </div>
          <div className="collapse-content text-lg">
            <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
          </div>
        </div>
        {/* question-3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            03. What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content text-lg">
           <p><strong>Unit Testing</strong> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
           <p>They enable you to catch bugs early in the development process.
Automated unit tests help a great deal with regression testing.
They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
          </div>
        </div>
        {/* question-4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-bold text-red-500">
            04. React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content text-lg">
            <p><strong>Angular: </strong>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>
            <p><strong>React: </strong>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>
            <p><strong>Vue: </strong>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;