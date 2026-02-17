import React from 'react';
import '../../styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links" aria-label="Social links">
      <a
        className="social-link"
        href="https://github.com/john-tettis"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.37-1.34-1.73-1.34-1.73-1.09-.74.09-.72.09-.72 1.2.08 1.84 1.23 1.84 1.23 1.08 1.82 2.82 1.3 3.5.99.11-.76.42-1.3.76-1.59-2.66-.3-5.47-1.32-5.47-5.9 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.54.12-3.2 0 0 1.02-.32 3.33 1.22a11.5 11.5 0 0 1 6.06 0c2.31-1.54 3.33-1.22 3.33-1.22.66 1.66.24 2.9.12 3.2.78.83 1.24 1.9 1.24 3.2 0 4.59-2.82 5.59-5.5 5.89.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
        </svg>
      </a>

      <a
        className="social-link"
        href="https://www.linkedin.com/in/john-tettis"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn URL"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M5.34 3.5a1.84 1.84 0 1 1 0 3.68 1.84 1.84 0 0 1 0-3.68ZM3.75 8.75h3.18v11.5H3.75V8.75Zm5.07 0h3.05v1.57h.04c.42-.8 1.46-1.64 3-1.64 3.2 0 3.79 2.1 3.79 4.82v6.75h-3.18V14.3c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14v6.05H8.82V8.75Z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;