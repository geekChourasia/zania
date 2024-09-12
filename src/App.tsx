import React, { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";

import { DocumentData, initialData } from "./data";
import Card from "./components/Card";
import SortableItem from "./components/SortableItem";
import "./App.css";

const App: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentData[]>(initialData);
  const [selectedDocument, setSelectedDocument] = useState<DocumentData | null>(null);

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setDocuments((items) => {
        const oldIndex = items.findIndex((item) => item.type === active.id);
        const newIndex = items.findIndex((item) => item.type === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setSelectedDocument(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 200, // Delay of 200ms to differentiate between click and drag
        tolerance: 5, // Allows a 5px movement before drag is triggered
      },
    })
  );

  return (
    <div className="App">
      <h1>Document Manager</h1>
      <DndContext
        // sensors={useSensors(useSensor(PointerSensor))}
        sensors={sensors} // Use the sensors with delay

        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={documents.map((doc) => doc.type)}
          strategy={verticalListSortingStrategy}
        >
          <div className="card-grid">
            {documents.map((doc, index) => (
              <SortableItem key={doc.type} id={doc.type}>
                <Card
                  document={doc}
                  index={index}
                  onClick={() => setSelectedDocument(doc)} // Set the clicked document
                />
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* Conditionally render the overlay */}
      {selectedDocument && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>
              X
            </button>
            <h2>{selectedDocument.title}</h2>
            <img
              src={`/cat-images/${selectedDocument.type}.png`}
              alt={selectedDocument.title}
              style={{ width: '300px', height: '300px' }}
            />
            {/* <p>Some more details about {selectedDocument.title}...</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
