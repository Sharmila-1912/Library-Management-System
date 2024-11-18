import React from 'react';
import { Document, Page } from 'react-pdf';


const PDFViewer = ({ fileUrl }) => {
    const [numPages, setNumPages] = React.useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="pdf-viewer">
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
};

export default PDFViewer;
