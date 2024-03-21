import React, { useState } from 'react';
import './App.css';

const PostLetterGenerator = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientAddress: '',
    senderName: '',
    senderAddress: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const generateHTML = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Post Letter</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            font-size: 24px;
            margin-bottom: 20px;
            color: #002868; /* Swisscom blue */
          }
          .details {
            font-size: 14px;
            margin-bottom: 10px;
            color: #4d4d4d; /* Dark gray */
          }
          .message {
            margin-top: 40px;
            font-size: 16px;
            line-height: 1.5;
            color: #4d4d4d; /* Dark gray */
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Post Letter</div>
          <div>
            <div class="details">To:</div>
            <div class="details">${formData.recipientName}</div>
            <div class="details">${formData.recipientAddress}</div>
          </div>
          <div style="margin-top: 20px;">
            <div class="details">From:</div>
            <div class="details">${formData.senderName}</div>
            <div class="details">${formData.senderAddress}</div>
          </div>
          <div class="message">
            ${formData.message}
          </div>
        </div>
      </body>
      </html>
    `;

    // Open the HTML content in a new tab
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close();
  };

  return (
    <div>
      <h2>Post Letter Generator</h2>
      <form>
        <label htmlFor="recipientName">Recipient Name:</label>
        <input
          type="text"
          name="recipientName"
          id="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
        />
        <label htmlFor="recipientAddress">Recipient Address:</label>
        <textarea
          name="recipientAddress"
          id="recipientAddress"
          value={formData.recipientAddress}
          onChange={handleChange}
        />
        <label htmlFor="senderName">Sender Name:</label>
        <input
          type="text"
          name="senderName"
          id="senderName"
          value={formData.senderName}
          onChange={handleChange}
        />
        <label htmlFor="senderAddress">Sender Address:</label>
        <textarea
          name="senderAddress"
          id="senderAddress"
          value={formData.senderAddress}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
      </form>
      <button onClick={generateHTML}>Generate HTML</button>
    </div>
  );
};

export default PostLetterGenerator;
