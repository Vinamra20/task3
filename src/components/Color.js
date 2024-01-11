import React, { useEffect, useState } from "react";

const Color = () => {
  const [favcolor, setfavcolor] = useState("white");
  const change = () => {
    document.getElementById("favdiv").style.backgroundColor = favcolor;
  };
  useEffect(() => {
    change();
  });
  return (
    <>
      <div
        style={{
          height: "500px",
          backgroundColor: "purple",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <h2 style={{ color: "white" }}>Select The Color for the component</h2>
        <div
          id="favdiv"
          style={{ width: "50%", height: "350px", marginLeft: "25%" }}
        >
          <form>
            <label for="favcolor">Select your favorite color:</label>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#ff0000"
              onChange={(e) => {
                setfavcolor(e.target.value);
              }}
            />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};
export default Color;
