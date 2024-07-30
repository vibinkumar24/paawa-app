import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image1 from './paawalogo.png';
import Image2 from './paawalogo1.jpg';
import SearchResult from './SearchResult';
import './Directory.css';
import axios from 'axios';

function Directory() {
    const [formData, setFormData] = useState({
      village: '',
      name: '',
      residingCity: '',
      profession: '',
      mobileNo: '',
      companyName: ''
    });
  
    const [searchResult, setSearchResult] = useState([]);
    const [failMessage, setFailMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get('http://localhost:8080/api/search', {
          params: formData
        });
        setSearchResult(response.data);
        setFailMessage('');
      } catch (error) {
        setSearchResult([]);
        setFailMessage('No results found');
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  
    return (
      <>
        <div id='header-container'>
          <div id='empty-div'></div>
          <div id='logo-title'>
            <img id='paawa-logo' src={Image1} alt="PAWA Logo" />
            <h1>Peravurani Area Agamudaiyar Welfare Association</h1>
          </div>
          <header id="header">
            <NavLink to="/" className="grid-item" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/myinfo" className="grid-item" activeClassName="active">MyInfo</NavLink>
            <NavLink to="/directory" className="grid-item" activeClassName="active">Directory</NavLink>
          </header>
        </div>
        <div id='search-form'>
          <form onSubmit={handleSubmit}>
            <div>
              <select
                name="village"
                value={formData.village}
                onChange={handleChange}
              >
                <option value="">Select Village</option>
                <option value="kuruvikkarambai">Kuruvikkarambai</option>
                <option value="avanam">Avanam</option>
                <option value="neduvasal">Neduvasal</option>
                <option value="vembangudi_paingal">Vembangudi Paingal</option>
                <option value="kalathur">Kalathur</option>
                <option value="thennangudi">Thennangudi</option>
                <option value="veeriankottai">Veeriankottai</option>
                <option value="nadiyam">Nadiyam</option>
                <option value="thuraiyur">Thuraiyur</option>
                <option value="peravurani_mudapulikkadu">Peravurani Mudapulikkadu</option>
                <option value="andakottai">Andakottai</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="residingCity"
                placeholder="Residing City"
                value={formData.residingCity}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="mobileNo"
                placeholder="Mobile No"
                value={formData.mobileNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <button id='form-submit' type="submit">Search</button>
            {failMessage && <p style={{color:'red',fontWeight:'bold'}}>{failMessage}</p>}
          </form>
          {searchResult.length > 0 && <SearchResult data={searchResult} />}
        </div>
      </>
    );
  }
  
  export default Directory;