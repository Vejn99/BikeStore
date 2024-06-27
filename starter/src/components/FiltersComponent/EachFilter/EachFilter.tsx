import { EachFilterInterface } from "./EachFilterInterface";
import "../Filters.css";
import { useState } from "react";

export const EachFilter = (props: EachFilterInterface) => {
  const [activeFilter, setActiveFilter] = useState<string>("Show All");

  const handleFilterClick = (filterBy: string) => {
    if (activeFilter.toLowerCase() !== filterBy.toLowerCase()) {
      setActiveFilter(filterBy);
    } else {
      setActiveFilter("Show All");
      filterBy = "Show All";
    }

    props.onFilterChange(filterBy);
  };

  const renderFilter = () => {
    return props.eachItem.map((item, index) => {
      const isActive =
        activeFilter.toLowerCase() === item.filterBy.toLowerCase();
      return (
        <>
          {item.category && (
            <h5 className="border-top mt-3 pt-2">{item.category}</h5>
          )}
          <div
            key={index}
            onClick={() => handleFilterClick(item.filterBy)}
            className={`filterItems d-flex justify-content-between align-items-center ${
              isActive ? "activeFilter" : ""
            }`}
          >
            <p className="m-0">{item.filterBy}</p>
            <span className="badge rounded-pill">{item.quantity}</span>
          </div>
        </>
      );
    });
  };

  return <>{renderFilter()}</>;
};
