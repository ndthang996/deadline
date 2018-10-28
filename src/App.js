import React, { Component } from 'react';

import './App.css';
import HelloWorld from './components/helloWorld/HelloWorld.component';
import JSX from './components/JSX/JSX.component';
import Element from './components/element/element.component';
import ComponentAndProps from './components/componentAndProps/ComponentAndProps.component';
import StateAndLifeCycle from './components/stateAndLifeCycle/StateAndLifeCycle.component';
import HandlingEvent from './components/handlingEvent/HandlingEvent.component';
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering.component';
import ListsAndKeys from './components/listsAndKeys/ListsAndKeys.component';
import Forms from './components/forms/Forms.component';
import LiftingStateUp from './components/liftingStateUp/LiftingStateUp.component';
import CompositionVsInheritance from './components/compositionVsInheritance/CompositionVsInheritance.component';
import ThinkingInReact from './components/thinkingInReact/ThinkingInReact.component';

class App extends Component {

  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'}
    ];
    const ListNum = [
      1, 2, 3, 4, 5
    ];
    return (
      <div className="App">
        <HelloWorld />
        <JSX />
        <Element />
        <ComponentAndProps testprop='đã truyền props'>đã truyền children</ComponentAndProps>
        <StateAndLifeCycle />
        <HandlingEvent />
        <ConditionalRendering />
        <ListsAndKeys posts={posts} ListNum={ListNum}/>
        <Forms />
        <LiftingStateUp />
        <CompositionVsInheritance />
        <ThinkingInReact />
      </div>
    );
  }
}

export default App;
