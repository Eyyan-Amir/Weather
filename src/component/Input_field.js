import React from "react";
import "../App.css";
import Background from "./background";
import { New } from "./New";

class Search extends React.Component {
  constructor(props) {
    super(props);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date(),
      date =
        today.getDate() +
        "-" +
        monthNames[today.getMonth()] +
        "-" +
        today.getFullYear();
    this.state = {
      value: "",
      store: [],
      date: date,
    };
  }

  min = 20;
  max = 50;

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleKey = (e) => {
    // console.log(e.)
    if (e.keyCode === 13) {
      // Cancel the default action, if needed
      e.preventDefault();
      // Trigger the button element with a click
      this.handleClick();
    }
  };

  handleClick = () => {
    const { value, store } = this.state;
    if (value == "") {
      alert("INVALID");
      return;
    }
    let array = store;
    array.push(value);
    this.setState({ store: array });
    if (store.length > 1 ) {
    store.splice(0, 1);
    }
    this.setState({ value: "" });

    this.setState({
      random: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
    });
  };

  weatherFetch = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        let filter = user.slice(0, 4);
        let arr = [];
        for (let i in filter) {
          const u = filter[i];
          const img = New[i];
          arr.push({ ...u, img: img });
        }
        this.setState({ users: arr });
      });
  };

  componentDidMount = () => {
    this.weatherFetch();
  };

  render() {
    return (
      <>
        <div className=" place">
          <input
            className=" input_field"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button className="search_btn" onClick={this.handleClick}>
            <i className="fa fa-search" />
          </button>

          {this.state.store.map((item, index) => {
            return (
              <div className="design" key={index}>
                {item}
                <br />({this.state.date})
              </div>
            );
          })}
        </div>
        <i className="temp_design">{` ${
          this.state.random ? `${this.state.random}'C ` : ""
        }`}</i>
        <div>
          {this.state.random  && < Background items= {this.state.users}/>}
        </div>
      </>
    );
  }
}

export default Search;
