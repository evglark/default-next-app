'use client'
import React from 'react'

import './style.scss';

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export const ControlPanel = ({ onNext, onPrev }: Props) => {
  return (
    <div className="control-panel btn-group">
      <div
        className="btn btn-outline-primary"
        onClick={onPrev}
      >
        {'<'}
      </div>
      <div className="btn btn-outline-primary">Middle</div>
      <div
        className="btn btn-outline-primary"
        onClick={onNext}
      >
        {'>'}
      </div>
    </div>
  );
};
