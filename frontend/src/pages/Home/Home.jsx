import React, { useState } from "react"; // Import useState
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important for accessibility

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
          <NoteCard
            title={"Grocery Shopping"}
            date={"7th June, 2021"}
            content={"Buy milk, bread, and eggs"}
            tags={"#groceries"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Team Meeting"}
            date={"10th June, 2021"}
            content={"Discuss project milestones and next steps"}
            tags={"#work #meeting"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Read a Book"}
            date={"12th June, 2021"}
            content={"Finish reading 'The Alchemist'"}
            tags={"#reading #selfimprovement"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Workout Routine"}
            date={"15th June, 2021"}
            content={"Complete 30 minutes of cardio and strength training"}
            tags={"#fitness #health"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Plan Weekend Getaway"}
            date={"20th June, 2021"}
            content={"Book hotel and plan itinerary for the weekend"}
            tags={"#travel #relaxation"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2B85FF] hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() =>
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => setOpenAddEditModal({ isShown: false })}
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.2)" } }} 
      >
        {/* Modal content goes here */}
      </Modal>
    </>
  );
}

export default Home;
