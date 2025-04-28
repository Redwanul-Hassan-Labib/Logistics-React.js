import React from 'react';

export default function BackToTop({ scroll }) {
  return (
    <>
      {scroll && (
        <a className="scroll-to-target scroll-to-top" href="#top">
          <i className="fas fa-arrow-up"></i>
        </a>
      )}
    </>
  );
}
