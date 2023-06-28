import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  handleReset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <form className="p-4 bg-primary" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <button type="submit" className="btn btn-primary border ">
            <i className="bi bi-search"></i>
          </button>
          <input
            name="search"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
          <button
            type="reset"
            className="btn btn-primary border "
            onClick={this.handleReset}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Searchbar;
