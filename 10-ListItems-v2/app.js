const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Peter",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Sandy",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Kate",
      sex: "female"
    },
    {
      id: 4,
      age: 24,
      name: "Mark",
      sex: "male"
    },
    {
      id: 5,
      age: 44,
      name: "Bella",
      sex: "female"
    }
  ]
}

const Item = ({user}) => ( 
<div className = "userInfo" >
<h1> {user.name}</h1>
<p>Information about user</p>
<p>User age: <strong>{user.age}</strong></p> 
<p>User sex : {user.sex}</p>
</div>
)

class ListItems extends React.Component {
  state = {
    select: "all",

  }

  handleUserFilter(option){
    this.setState({
      select: option,
    })
  }

usersList = () => {
  let users = this.props.data.users
  switch(this.state.select){
    case "all": 
    return  users.map(user  => <Item user={user} key={user.id} /> )
    case "female":
    users = users.filter(user => user.sex === "female");
    return users.map((user) => <Item user={user} key={user.id} /> )
    case "male": 
    users = users.filter (user => user.sex === "male");
    return users.map((user) => <Item user={user} key={user.id} /> )
    default :
    return "brak danych - something wrong"
  }
 
}

  render() {
    

    return (
      <div>
        <button onClick={this.handleUserFilter.bind(this, "all")}>All people</button>
        <button onClick={this.handleUserFilter.bind(this, "female")}>Womans</button>
        <button onClick={this.handleUserFilter.bind(this, "male")}>Man</button>
        {this.usersList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
