import React from "react";
import PropTypes from "prop-types";

/**
 * Display a list of items
 * @param {Array} items - Array of item to display
 * @param {Function} renderItem - Function to display an item
 */
export default function List({ items, renderItem }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{renderItem(item, i)}</div>
      ))}
    </div>
  );
}

List.proptypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired
};
