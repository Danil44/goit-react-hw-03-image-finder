import React, { Component } from 'react';
import axios from 'axios';

const withFetch = props => BaseComponent => {
  return class WithFetch extends Component {
    state = { data: {}, error: null };

    componentDidMount() {
      const url = props;
      axios
        .get(url)
        .then(res => this.setState({ data: res.data }))
        .catch(err => this.setState({ error: err }));
    }

    render() {
      return <BaseComponent {...this.state} />;
    }
  };
};
export default withFetch;
