import { useEffect, useState } from "react";

const ScrollTo = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

//   console.log(offset);

  const handleClick = () => {
    const view = document.querySelector("#step--step");

    if (view) {
      view.scrollIntoView({ behavior: "smooth", block: "start" });      
    }
  };

  return (
    <button
      id="scroll--to"
      onClick={() => handleClick()}
      className={1000 < offset || offset < 200 ? "scroll-to" : "scroll-to no-op"}
    >
      Preregistrarme
    </button>
  );
};

export default ScrollTo;
