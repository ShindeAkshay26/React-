// DataFetcher.js

import React, { Component } from 'react';

class DataFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2>DataFetcher Component</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default DataFetch;
