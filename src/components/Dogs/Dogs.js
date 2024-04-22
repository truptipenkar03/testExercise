import { useCallback, useEffect, useState } from "react";
import "./Dogs.css";

const Dogs = () => {
  const [data, setData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
      res.json().then((response) => {
        setData(response.message);
        setSelectedValue(Object.keys(response.message)?.[0]);
      });
    });
  }, []);

  const handleChange = useCallback((e) => {
    setSelectedValue(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedValue !== "") {
      fetch(`https://dog.ceo/api/breed/${selectedValue}/images`).then((res) => {
        res.json().then((response) => setImages(response.message));
      });
    }
  }, [selectedValue]);

  return (
    <div className="flex flex-col flex-1 px-2">
      <h2 className="headerText">Fun with dogs</h2>
      <hr className="mb-4" />

      <h3>Pick your favorite breed - </h3>
      <select className="w-40 border-2" onChange={handleChange}>
        {/* <option value="">Select</option> */}
        {Object.keys(data).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <hr className="mb-4" />

      <div className="grid">
        {images?.map((image) => (
          <div key={image} className="grid grid-cols-4 gap-4">
            <img
              src={image}
              alt={image}
              width="200"
              height="200"
              style={{
                border: "1px black solid",
                borderRadius: "10px",
                boxShadow: "1px #dedede",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
