import { useEffect, MutableRefObject } from "react";

/**
 * Hook that check clicks outside of the passed ref
 * @param ref is a container ref
 * @param onOutsideClick is a callback
 */
function useOutsideClick(
  ref: MutableRefObject<HTMLDivElement | null>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideClick;
