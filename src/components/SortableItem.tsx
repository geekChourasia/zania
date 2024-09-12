import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Dragging state to provide feedback
  } = useSortable({ id });

const style: React.CSSProperties = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition: transition || 'transform 150ms ease',
    cursor: 'grab',
    opacity: isDragging ? 0.5 : 1,
    boxShadow: isDragging ? '0 5px 15px rgba(0, 0, 0, 0.2)' : 'none',
    border: isDragging ? '1px dashed #000' : 'none',
    userSelect: 'none', // 'none' is a valid value for userSelect
  };
  

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default SortableItem;

