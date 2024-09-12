# Document Manager

**Document Manager** is a React-based application for managing and interacting with document cards. It supports drag-and-drop sorting and displays cards in a responsive grid layout. Clicking on a card shows additional details in an overlay.

## Features

- **Drag and Drop**: Reorder cards by dragging and dropping.
- **Overlay View**: Click on a card to view detailed information.
- **Responsive Grid Layout**: Cards are displayed with the first 3 in the top row and additional cards in subsequent rows.

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```
   Open `http://localhost:3000` in your browser to view the application.

## Project Structure

- **`src/`**: Contains source code.
  - **`data.ts`**: Defines `DocumentData` and `initialData`.
  - **`components/`**:
    - **`Card.tsx`**: Displays document details.
    - **`SortableItem.tsx`**: Handles drag-and-drop functionality.
  - **`App.tsx`**: Main component managing state and layout.
  - **`App.css`**: Styles for the application and components.

## Data Format

The `initialData` used in the application:

```ts
export interface DocumentData {
  type: string;
  title: string;
  position: number;
}

export const initialData: DocumentData[] = [
  { type: 'bank-draft', title: 'Bank Draft', position: 0 },
  { type: 'bill-of-lading', title: 'Bill of Lading', position: 1 },
  { type: 'invoice', title: 'Invoice', position: 2 },
  { type: 'bank-draft-2', title: 'Bank Draft 2', position: 3 },
  { type: 'bill-of-lading-2', title: 'Bill of Lading 2', position: 4 }
];
