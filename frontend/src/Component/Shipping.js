import React from "react";

export default class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_name: "",
      from_zip: "",
      to_zip: "",
      weight: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8001/rate`, {
      method: "post",
      mode: "cors",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .then((data) => console.log(data))
      .catch((err) => console.error("Error", err));
  }
  handleChange(event) {
    switch (event.target.name) {
      case "to_name":
        this.setState({ to_name: event.target.value });
        break;
      case "to_zip":
        this.setState({ to_zip: event.target.value });
        break;
      case "weight":
        this.setState({ weight: event.target.value });
        break;
      default:
    }
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div
            className="mb-3"
            style={{
              margin: "40px",
              padding: "50px 20px",
              border: "2px solid #66ff66",
              backgroundColor: " ",
              borderRadius: "40px",
              width: "1000px",
            }}
          >
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="to_name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />

            <label className="form-label">To Address Zip Code:</label>

            <input
              type="text"
              className="form-control"
              name="to_zip"
              value={this.state.to_zip}
              onChange={this.handleChange}
            />
            <br />
            <label className="form-label">Parcel Weight:</label>
            <input
              type="number"
              className="form-control"
              name="weight"
              value={this.state.weight}
              placeholder="In kg"
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
