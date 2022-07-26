import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const RoomFilter = ({ rooms }) => {
  const roomCtx = useContext(RoomContext);

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
      pets,
    handleChange
  } = roomCtx;

  // get unique value
  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  // get unique type
  let types = getUnique(rooms, "type");
  // adding the all type
  types = ["all", ...types];
  // returning it to jsx
  types = types.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title={"search rooms"} />
      <form className="filter-form ">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of type */}
      </form>
    </section>
  );
};

export default RoomFilter;
