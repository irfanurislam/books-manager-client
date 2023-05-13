import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  console.log(details);
  return (
    <div className="card">
      <img src={details.imageUrl} alt="" />
      <div className="card-header">{details.bookName}</div>
      <div className="card-body">
        <h5 className="card-title">{details.authorName}</h5>
        <p className="card-text">{details.metaTextDescription}</p>
        <a href="#" className="btn btn-primary">
          BookMark
        </a>
      </div>
      <iframe
        title="PDF Viewer"
        src={details.bookPdfUrl}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default BookDetails;