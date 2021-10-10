import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getSeries from '../services/api';

function Provider(props) {
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState('series');

  useEffect(() => {
    const arrayApi = async () => {
      const serie = await getSeries(query);
      setdata(serie);
    };
    arrayApi();
  }, [query]);
const  value = {data, setQuery};
  const { children } = props;
  return (
    <MyContext.Provider
      value={value}
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
