import React, { useEffect, useState } from 'react';

function TagsInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const setTagToLocal = (item, obj) => {
    let o = { item: obj }
    localStorage.setItem(item, JSON.stringify(o))
  };
  const getTagToLocal = (item) => {
    return JSON.parse(localStorage.getItem(item))
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      for (let index = 0; index < tags.length; index++) {
        const element = tags[index];
        if (element == inputValue) {
          setInputValue('');
          return
        }
      }
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setTagToLocal('userDetails', newTags)

      setInputValue('');
    }
  };

  const handleRemoveTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags)
    setTagToLocal('userDetails', newTags)
  };
  useEffect(() => {
    const prevTags = getTagToLocal('userDetails');
    if (prevTags)
      setTags([...prevTags.item])
    return () => {
      // console.log("test")
    };
  }, [])
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
