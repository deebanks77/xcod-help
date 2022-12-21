import React, { useState, useRef } from "react";
import { CgSearch } from "react-icons/cg";

function HelpSearch() {
  const [search, setSearch] = useState("");
  const focus = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="max-w-sectionWidth w-full">
      <div className="w-[90%] max-w-[1200px] h-[200px] iPad:h-[340px] my-[20px] mx-auto text-white bg-[#013E96] rounded-lg flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-[28px] iPad:text-[48px]">
          How can we help?
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div className="bg-[#18191b] rounded-lg flex items-center justify-center px-[10px]">
            <CgSearch onClick={() => focus.current.focus()} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Try "configure your store" or "How to add media"`}
              className="outline-none bg-[#18191b] text-white px-[5px] py-[8px] w-[300px] tablet:w-[400px] iPad:w-[600px] rounded-lg"
              ref={focus}
            />
          </div>

          <fieldset>
            <p>Popular topics: stori, introverse, qrVerse </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default HelpSearch;
