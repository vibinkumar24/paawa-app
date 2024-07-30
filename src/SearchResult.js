import React from 'react';

function SearchResult({ data }) {
  return (
    <div>
      <h2>Search Results</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <p>Village: {item.village}</p>
            <p>Current Residing: {item.currentResiding}</p>
            <p>Permanent Residing: {item.permanentResiding}</p>
            <p>Mobile No: {item.mobileNo}</p>
            <p>Education: {item.education}</p>
            <p>Occupation: {item.occupation}</p>
            <p>Company Name: {item.companyName}</p>
            <p>Wife Name: {item.wifeName}</p>
            <p>Wife Village: {item.wifeVillage}</p>
            <p>Wife Education: {item.wifeEducation}</p>
            <p>No of Children: {item.noOfChildren}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResult;
