var React = require('react');

/* the parent of all other components */
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className = "todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todo = this.props.data.map(function(obj) {
      // React make use of a key attribute to keep track of each component in the VirtualDOM
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
    });
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // validate props being passed to your components.
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  // Invoked once before the component is mounted.
  // The return value will be used as the initial value of this.state
  getInitialState: function() {
    return {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
  },
  handleChange: function() {
    this.setState({checked: !this.state.checked});
    if (this.state.checked) {
      this.setState({
        TodoStyle: style.checkedTodo
      });
    } else {
      this.setState({
        TodoStyle: style.notCheckedTodo
      });
    }
  },
  render: function() {
    return (
      <tr style={this.state.TodoStyle}>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render: function() {
    return (
      <div className = "todoForm">
        I am a TodoForm.
      </div>
    );
  }
});

var style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
