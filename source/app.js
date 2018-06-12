// impor react
var React = require('react');
var ReactDOM = require('react-dom');

// membuat element
// var h1 = React.createElement("h1", { className: 'header', key: 'header'}, 'This is React!');
// var p = React.createElement('p', { className: 'content', key: 'content'}, "And that's how it works.");

// menggambungkan komponen
// var reactFragment = [h1, p];
// var section = React.createElement('section', {className: 'container'}, reactFragment);

// membuat elemen li tanpa JSX
// var createListElement = React.createFactory('li');
// var listItemElement1 = createListElement({className: 'item-1', key: 'item-1'}, 'Item 1');
// var listItemElement2 = createListElement({className: 'item-2', key: 'item-2'}, 'Item 2');
// var listItemElement3 = createListElement({className: 'item-3', key: 'item-3'}, 'Item 3');

// var reactFragmentList = [listItemElement1, listItemElement2, listItemElement3];
// var listOfItems = React.createElement('ul', { className: 'list-of-items'}, reactFragmentList);

// membuat elemen list dengan JSX
// var listOfItems = <ul className="list-of-items">
//                     <li className="item-1">Item 1</li>
//                     <li className="item-2">Item 2</li>
//                     <li className="item-3">Item 3</li>
//                   </ul>;


// membuat stateful react componen
var ReactClass = React.createClass({
  getInitialState: function() {
    return { 
      isHeaderHidden: false,
      title: 'Stateful React Component' 
    };
  },
  handleClick: function(){
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },
  render: function() {
    var headerElement = React.createElement('h1', { className: 'header', key: 'header'}, this.state.title );
    var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button'}, 'Toggle Header');
    if( this.state.isHeaderHidden ) {
      return React.createElement('div', null, [buttonElement]);
    }
    return React.createElement('div', null, [buttonElement, headerElement]);
  }
});

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
// render
// ReactDOM.render(listOfItems, document.getElementById('react-application'));