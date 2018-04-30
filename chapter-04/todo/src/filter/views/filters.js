import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js';

import './style.css'; // 对于webpack来说一切皆模块， So import a css file will be packed in the finally files while build.

const Filters = () => {
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
      <Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;
