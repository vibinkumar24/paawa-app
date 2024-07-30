import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image1 from './paawalogo.png';
import './MyInfo.css';
import Image2 from './paawalogo1.jpg';


function MyInfo() {
    const [formData, setFormData] = useState({
        village: '',
        currentResiding: '',
        permanentResiding: '',
        mobileNo: '',
        education: '',
        occupation: '',
        companyName: '',
        wifeName: '',
        wifeVillage: '',
        wifeEducation: '',
        noOfChildren: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
    
        setFormData({
          village: '',
          currentResiding: '',
          permanentResiding: '',
          mobileNo: '',
          education: '',
          occupation: '',
          companyName: '',
          wifeName: '',
          wifeVillage: '',
          wifeEducation: '',
          noOfChildren: ''
        });
      };
    
      return (
        <>
        <div id='header-container'>
         <div id='empty-div'></div>
            <div id='logo-title'>
                <img id='paawa-logo' src={Image1}></img>
                <h1>Peravurani Area Agamudaiyar Welfare Association</h1>
            </div>
            <header id="header">
                    <NavLink to="/" className="grid-item" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/myinfo" className="grid-item" activeClassName="active">MyInfo</NavLink>
                    <NavLink to="/directory" className="grid-item" activeClassName="active">Directory</NavLink>
                </header>
            </div>
        <div id='form'>
          <h1>Enter Your Details</h1>
          <h3>Membership : Life</h3>
          <h3>Name : XXXX</h3>
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
              <textarea 
                type="text" 
                name="currentResiding" 
                placeholder="Current Residing" 
                value={formData.currentResiding} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <textarea 
                type="text" 
                name="permanentResiding" 
                placeholder="Permanent Residing" 
                value={formData.permanentResiding} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="number" 
                name="mobileNo" 
                placeholder="Mobile No" 
                value={formData.mobileNo} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="education" 
                placeholder="Education" 
                value={formData.education} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="occupation" 
                placeholder="Occupation" 
                value={formData.occupation} 
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
            <div>
              <input 
                type="text" 
                name="wifeName" 
                placeholder="Wife Name" 
                value={formData.wifeName} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="wifeVillage" 
                placeholder="Wife Village" 
                value={formData.wifeVillage} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="wifeEducation" 
                placeholder="Wife Education" 
                value={formData.wifeEducation} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <input 
                type="number" 
                name="noOfChildren" 
                placeholder="No of Children" 
                value={formData.noOfChildren} 
                onChange={handleChange} 
              />
            </div>
            <button id='form-submit' type="submit">Submit</button>
          </form>
        </div>
        </>
      );
    }
export default MyInfo;
