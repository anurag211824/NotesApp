import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../../components/input/TagInput";

function AddEditNotes({ onClose, noteData, type }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState(["default-tag"]);
  const [error, setError] = useState(null);
  const editNote = async () => {};
  const addNewNote = async () => {};
  const handleAddNote = () => {
    if (!title) {
      setError("Please enetr the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label text-red-400 uppercase block mb-2">
          Title
        </label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none w-full mb-4"
          placeholder="Wake up at 6 a.m."
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <label className="input-label text-red-400 uppercase block mb-2">
          Content
        </label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content..."
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="">
        <label className="input-label text-red-400 uppercase">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
}

export default AddEditNotes;
