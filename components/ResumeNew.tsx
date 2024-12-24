import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";


export const ResumeNew: React.FC = () => (
  <iframe
      src="/MyoThetKyaw_Resume.pdf"
      style={{ width: '80%', height: '800px' }}

  >
      Your browser does not support PDFs. Please download the PDF to view it: <a href="/MyoThetkyaw_Resume.pdf">Download PDF</a>
  </iframe>
);

