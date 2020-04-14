import React from 'react';

function GetTime() {
  const date = new Date();
  const getMinutes = date.getMinutes();
  const getMilliseconds = date.getMilliseconds();
  let totaltimetaken;
  fetch('http://www.asbsolutionsgroup.com/')
    .then(response => response.json());

  return (
    <p1>
      {' '}
totaltimetaken =
      {getAPI}
      {' '}

    </p1>
  );
}

export default GetTime;
