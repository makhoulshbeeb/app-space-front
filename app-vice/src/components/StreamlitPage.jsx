import React from 'react';

const StreamlitPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe
        src="http://localhost:8503"
        title="Streamlit App"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default StreamlitPage;
