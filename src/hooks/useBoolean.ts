import { Dispatch, useMemo, useReducer } from "react";

function toggler(currentValue: boolean, newValue: boolean) {
  return typeof newValue === "boolean" ? newValue : !currentValue;
}

export function useToggle(initialValue = false) {
  return useReducer(toggler, initialValue);
}

interface IBooleanHandlers {
  setToggle: Dispatch<boolean>;
  on: () => void;
  off: () => void;
}

function useBoolean(initialValue = false): [boolean, IBooleanHandlers] {
  const [value, setToggle] = useToggle(initialValue);

  const handlers = useMemo(
    () => ({
      setToggle,
      on: () => setToggle(true),
      off: () => setToggle(false),
    }),
    [setToggle]
  );

  return [value, handlers];
}

export default useBoolean;
