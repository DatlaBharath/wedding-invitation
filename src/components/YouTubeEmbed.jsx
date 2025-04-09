import React, { useState, useEffect, useRef } from 'react';

function YouTubeEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    const iframeElement = iframeRef.current;
    
    if (iframeElement) {
      iframeElement.addEventListener('load', handleLoad);
      
      // Fallback timeout
      const loadTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => {
        iframeElement.removeEventListener('load', handleLoad);
        clearTimeout(loadTimeout);
      };
    }
  }, []);

  return (
    <div style={{
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '40px',
      position: 'relative',
      minHeight: '450px'
    }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '450px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          zIndex: 10
        }}>
          Loading Live Stream...
        </div>
      )}
      <iframe 
        ref={iframeRef}
        width="90%" 
        height="450" 
        src="https://www.youtube.com/embed/AHprdByctS8?autoplay=0&mute=0&controls=1&enablejsapi=1" 
        title="Live Stream"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          position: 'relative',
          zIndex: 1
        }}
      />
    </div>
  );
}

export default YouTubeEmbed;