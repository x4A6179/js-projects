// Redux
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  handleChange(e) {
      this.setState({
        input: e.target.value,
      })
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange}>{this.state.input}</input>
        <button type='submit' onSubmit={this.submitMessage}>Submit</button>
        <ul>{this.props.messages.map(x => <li>{x}</li>)}</ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {return {messages: state}};
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
