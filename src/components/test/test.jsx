import React from 'react';

const Test = () => {
  return (
    <div style={{ height: '100vh', width: '50%', margin: "100px" }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/terminal-report.pdf`}
        style={{ height: '100%', width: '100%', border: 'none' }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default Test;
