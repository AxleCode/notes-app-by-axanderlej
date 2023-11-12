import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const searchValue = event.target.value;
    this.setState({ searchValue }, () => {
      // Memanggil fungsi pencarian dari parent component
      this.props.onSearch(searchValue);
    });
  }

  render() {
    return (
      <div className="search-box">
        <form action="searchForm">
          <input
            type="text"
            placeholder="Cari Catatan..."
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBox;
