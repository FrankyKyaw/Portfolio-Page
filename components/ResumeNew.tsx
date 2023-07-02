import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";


export const ResumeNew: React.FC = () => (
  <iframe
      src="/MyoThet_Kyaw_resume.pdf"
      style={{ width: '80%', height: '800px' }}

  >
      Your browser does not support PDFs. Please download the PDF to view it: <a href="/MyoThet_Kyaw_resume.pdf">Download PDF</a>
  </iframe>
);

