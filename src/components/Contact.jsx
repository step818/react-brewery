import React from 'react';

function Contact() {
  return(
    <div>
      <h1>Submit a request</h1>
      <form>
        <label>Your email address*</label>
        <input
          type='text'
          id='contactEmail'/>
        <label>Subject*</label>
        <input
          type='text'
          id='contactSubject'/>
        <label>Reason for Contact</label>
        <select>
          <option value='reasonFeedback'>I have feecback about Rogue</option>
          <option value='reasonFind'>Where can I find Rogue</option>
          <option value='reasonComment'>I have a question or complaint about Rogue</option>
          <option value='reasonDonation'>I am requesting a donation from Rogue</option>
          <option value='reasonSales'>I want to sell Rogue products</option>
          <option value='reasonEmployee'>I work for Rogue or am a distributor</option>
          <option value='reasonPartner'>I want to partner with Rogue</option>
          <option value='reasonOther'>I have another question for Rogue</option>
          <option value='reasonPress'>I am a member of the press and have a question for Rogue</option>
        </select>
        <label>Description*</label>
        <textarea 
          id="contactDescription" cols="30" rows="10"></textarea>
        <p>Please enter the details of your request.  We will respond as soon as possible.</p>
        <label>Company</label>
        <input
          type='text'
          id='contactCompany'/>
        <label>First Name*</label>
        <input
          type='text'
          id='contactFirstName'/>
        <label>Last Name*</label>
        <input
          type='text'
          id='contactLastName'/>
        <label>City*</label>
        <input
          type='text'
          id='contactCity'/>
        <label>State*</label>
        <input
          type='text'
          id='contactState'/>
        <label>Zip*</label>
        <input
          type='text'
          id='contactZip'/>
        <label>Country</label>
        <input
          type='text'
          id='contactCountry'/>
        <label>Attachments</label>
        <input
          type='text'
          id='contactAttachments'/>
        <button
          type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;