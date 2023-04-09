import React, { useState } from 'react';

function TagsInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col-reverse gap-2 ">
      <div className="flex gap-2 flex-wrap h-auto ">
        {tags.map((tag) => (
          <span key={tag} className="rounded-2xl bg-[#EDEDED]
           text-sm px-1 flex items-center gap-2" >
            {tag}
            
            <i
          className="fa-solid fa-xmark text-red-600 cursor-pointer" onClick={() => handleRemoveTag(tag)}
          
        ></i>
          </span>
        ))}
      </div>
      <input
      className="border-b-2 outline-none shadow-sm shadow-slate-400"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add skills"
      />
    </div>
  );
}

export default TagsInput;
