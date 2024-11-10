import axios from "axios";
import React, { useState, useEffect } from "react";
import Context from "../context/Context";
import { useContext } from "react";

const ShowData = () => {

  const {fetchData, showData,totalAvg }=useContext(Context)




  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
     

      <div className="showDataDiv">
        <div className="scrollAble">
          <table className="data-table">
            <thead>
              <tr>
                <th>name</th>
                <th>age(sort in ascending)</th>
                <th>count</th>
              </tr>
            </thead>
            <tbody>
              {showData.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name[0]}</td>
                    <td>{value._id}</td>
                    <td>{value.count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "20px", marginTop:"10px" }}>
          Total average of each age fields:{" "}
          <span style={{ color: "blue" }}>

            {totalAvg && totalAvg.length > 0  ?totalAvg[0].average  : "Loading average..."}
          
          </span>
        </p>
      </div>
    </>
  );
};

export default ShowData;
