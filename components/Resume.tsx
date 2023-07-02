import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"


export const Resume = () => {
  return (
    <div>
        <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
    </div>
  )
}
