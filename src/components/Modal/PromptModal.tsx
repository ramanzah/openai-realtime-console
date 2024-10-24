// src/components/Modal/PromptModal.tsx
import React, { useState } from 'react';
import './PromptModal.scss';

interface PromptModalProps {
  isOpen: boolean;
  currentPrompt: string;
  onClose: () => void;
  onSave: (newPrompt: string) => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  currentPrompt,
  onClose,
  onSave,
}) => {
  const [prompt, setPrompt] = useState(currentPrompt);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Prompt</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave(prompt)}>Save</button>
        </div>
      </div>
    </div>
  );
};