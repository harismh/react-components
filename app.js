class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      'font-weight': this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} 
      onMouseEnter={this.onItemHover.bind(this)} 
      onMouseLeave={this.onItemHover.bind(this)} 
      > {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Apples', 'Bananas', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));