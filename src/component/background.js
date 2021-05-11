import React from "react";
import "../App.css";

class Background extends React.Component {
  constructor() {
    super();
    const today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.state = {
      date: date,
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row ">
            {this.props.items.map((k, i) => {
              console.log(k);
              return (
                <div className=" col-md-3" key={i}>
                  <img src={k.img} className="resize"></img>
                  <h1 style={{ color: "red" }}>{k.name}</h1>
                  <div className="text"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
