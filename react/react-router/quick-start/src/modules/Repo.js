import React, { PropTypes } from 'react';

const Repo = ({ params }) => (
  <div>
    <h2>{params.repoName}</h2>
  </div>
);

Repo.propTypes = {
  params: PropTypes.object
};

export default Repo;
