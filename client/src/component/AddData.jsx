import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import Context from "../context/Context";

const AddData = () => {
  const [data, setData] = useState({ name: "", age: "", gender: "" });

  const {fetchData}=useContext(Context)
  

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post( "http://localhost:9000/save", data)
      console.log(response.data)
      fetchData()
      setData({ name: "", age: "", gender:" "});
    
      if (response.data.success) {
        toast.success(response.data.message);
      }
      
    } catch {
      toast.error("something wrong");
    }
  };

  return (
    <div className="addDataDiv">
      <form className="addForm" onSubmit={handleAddData}>
        <input
          type="text"
          onChange={handleOnChange}
          name="name"
          value={data.name}
          placeholder="name"
          required
        />

        <input
          type="number"
          onChange={handleOnChange}
          name="age"
          value={data.age}
          placeholder="age"
          required
        />

        <input
          type="text"
          onChange={handleOnChange}
          name="gender"
          value={data.gender}
          placeholder="gender"
          required
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddData;
