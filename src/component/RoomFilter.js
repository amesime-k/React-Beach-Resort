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
    handleChange,
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

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

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
        {/* Guest  */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of Guest */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> Room price ${price}</label>
          <input
            type="range"
            value={price}
            id="price"
            name="price"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* room size */}
        <div className="form-group">
          <label htmlFor="size"> Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              id="size"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              id="size"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of room size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            <label htmlFor="breakfast"> Breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            <label htmlFor="pets"> pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
