import React from 'react';
import './ProjectSkeleton.css';

interface ProjectSkeletonProps {
  count?: number;
}

const ProjectSkeleton: React.FC<ProjectSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-description">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
            <div className="skeleton-tech">
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
            </div>
            <div className="skeleton-buttons">
              <div className="skeleton-button"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
