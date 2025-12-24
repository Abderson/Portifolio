import React, { useState, useEffect, ReactNode } from 'react';
import './PageTransition.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [displayChildren, setDisplayChildren] = useState<ReactNode>(children);

  useEffect(() => {
    if (children !== displayChildren) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="transition-overlay"></div>
      <div className="page-content">
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;
