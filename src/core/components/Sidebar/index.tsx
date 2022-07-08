import { memo, useEffect, useRef, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import "./Sidebar.css";

interface IRootElementProps {
    transition: CSSStyleDeclaration["transition"],
    backgroundColor: CSSStyleDeclaration["backgroundColor"],
}

interface ISidebar {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: "left" | "right" | "bottom";
}

const Sidebar = ({ open = false, onClose, children, position = "right" }: ISidebar) => {
  const rootElement = document.getElementById("root");
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [initialValues, setInitialValues] = useState<IRootElementProps>({ backgroundColor: "", transition: "" });
  
  useOutsideClick(sidebarRef, onClose);

  useEffect(() => {
    if (rootElement) {

      setInitialValues({
        transition: rootElement.style.transition,
        backgroundColor: rootElement.style.backgroundColor,
      });

      if (open) {
        rootElement.style.transition = "background-color .5s";
        rootElement.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
    }

    return () => {
      rootElement && (rootElement.style.backgroundColor = initialValues.backgroundColor);
    };
  }, [open]);

  return (
    <div ref={sidebarRef} className={`sidebar__container ${open ? "open" : ""}`} style={{ [position]: 0 }}>
      <span className="sidebar__close--button" onClick={onClose}>&times;</span>
      <div className="sidebar__content">
        {open ? children : null}
      </div>
    </div>
  );
}

export default memo(Sidebar);