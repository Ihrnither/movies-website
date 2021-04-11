import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollbar = (props) => {
  return (
    <Scrollbars
      style={{ width: "100vw", height: "100vh" }}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{ ...style, backgroundColor: "#FAE807", zIndex: 9998 }}
        />
      )}
    >
      {props.children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
