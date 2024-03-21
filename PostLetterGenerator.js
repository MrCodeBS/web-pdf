import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import * as jsPDF from 'jspdf'; // Import jsPDF

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  details: {
    fontSize: 12,
  },
});

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

  const generatePDF = () => {
    const doc = (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.header}>Post Letter</Text>
          <View>
            <Text>To:</Text>
            <Text style={styles.details}>{formData.recipientName}</Text>
            <Text style={styles.details}>{formData.recipientAddress}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>From:</Text>
            <Text style={styles.details}>{formData.senderName}</Text>
            <Text style={styles.details}>{formData.senderAddress}</Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text>{formData.message}</Text>
          </View>
        </Page>
      </Document>
    );

    Font.register({
      family: 'Oswald',
      src: 'https://fonts.google.com/specimen/Oswald', // Replace with Oswald font URL
    });

    const pdfDoc = doc.toPdf();

    pdfDoc.then((blob) => {
      const pdfUrl = URL.createObjectURL(blob);
      const doc = new jsPDF();
      doc.addImage(pdfUrl, 'PNG', 0, 0);
      doc.save('post_letter.pdf');
    });
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
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PostLetterGenerator;
