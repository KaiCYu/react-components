class GroceryListItems extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    // console.log(`event item got clicked!`);
    this.setState({
      done: !this.state.done
    });
  }

  render() {
      var style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
      };
      return (
        <li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>
      );
  }

}

var groceryItems = ['apples', 'oranges', 'pears', 'bananas'];

var GroceryList = (props) => (
  <ul>
    <h1>Grocery List</h1>
  {props.items.map(item => <GroceryListItems item={item}/>)}
  </ul>
);

var App = () => (
  <GroceryList items={groceryItems}/>
)

ReactDOM.render(<App/>, document.getElementById("app"));
