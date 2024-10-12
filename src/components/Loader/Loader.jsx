import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

import { selectLoading } from "../../redux/contactsSlice";

export default function Loader() {
  const loading = useSelector(selectLoading);

  return loading
    ? createPortal(
        <div
          style={{
            position: "absolute",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <RotatingLines
            visible={true}
            height="48"
            width="48"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>,
        document.body
      )
    : null;
}
