import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState();
  const [detail, setDetail] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const onChangePicture = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setDetail(e.target.files[0]);
  };
  const handleImageLoad = (e) => {
    setHeight(e.target.clientHeight);
    setWidth(e.target.clientWidth);
  };

  return (
    <div className="container App">
      <div className="my-3 text-center">
        <label for="formFile" className="form-label text-white">
          Default file input example
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={onChangePicture}
        />
      </div>
      {detail ? (
        <img
          className="img-thumbnail"
          src={image}
          alt={detail && detail.name}
          onLoad={handleImageLoad}
        />
      ) : null}
      {detail ? (
        <div className="my-3 text-white">
          <p>
            Title: <strong>{detail && detail.name}</strong>
          </p>
          <p>
            Dimension:{" "}
            <strong>
              {height}px * {width}px
            </strong>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
