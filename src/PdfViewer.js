import React,{useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
export default function PdfViewer() {
    const [file, setFile] = useState('https://cors.bridged.cchttps://www.onegml.com/assets/web/ecatalog/OneGML_CDHX_Ecatalog.20210602.pdf');
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
    console.log('test')
    return (
        <div>
            <Document
        file="https://qubisastorage.blob.core.windows.net/files/forum/7/e468b55c-ebac-497f-bf0f-d8c7e7ef321a.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page width={500} pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
        </div>
    )
}
