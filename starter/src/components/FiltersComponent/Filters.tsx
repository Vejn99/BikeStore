import { useEffect, useState } from "react";
import { EachFilter } from "./EachFilter/EachFilter";
import "./Filters.css";
import { FiltersInterface } from "./FiltersInterface";
import { CardItem } from "../CardComponent/CardInterface";
import axios from "axios";
import { CardComponent } from "../CardComponent/Card";

export const FiltersComponent = () => {
  const [products, setProducts] = useState<CardItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<CardItem[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("Show All");

  useEffect(() => {
    axios
      .get<{ products: CardItem[] }>(
        "https://challenges.brainster.tech/ajax_data/data.json"
      )
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const applyFilter = (filterValue: string) => {
    setCurrentFilter(filterValue);

    if (filterValue.toLowerCase() === "show all") {
      setFilteredProducts(products);
    } else {
      const filtered =
        filterValue.toLowerCase() === "male" ||
        filterValue.toLowerCase() === "female"
          ? products.filter(
              (product) =>
                product.gender.toLowerCase() === filterValue.toLowerCase()
            )
          : products.filter(
              (product) =>
                product.brand.toLowerCase() === filterValue.toLowerCase()
            );

      setFilteredProducts(filtered);
    }
  };
  const allFilters: FiltersInterface[] = [
    {
      filterItems: [
        {
          filterBy: "Show All",
          quantity: products.length,
        },
        {
          category: "Gender",
          filterBy: "Male",
          quantity: products.filter((product) => product.gender === "MALE")
            .length,
        },
        {
          filterBy: "Female",
          quantity: products.filter((product) => product.gender === "FEMALE")
            .length,
        },
        {
          category: "Brand",
          filterBy: "LE GRAND BIKES",
          quantity: products.filter(
            (product) => product.brand === "LE GRAND BIKES"
          ).length,
        },
        {
          filterBy: "KROSS",
          quantity: products.filter((product) => product.brand === "KROSS")
            .length,
        },
        {
          filterBy: "EXPLORER",
          quantity: products.filter((product) => product.brand === "EXPLORER")
            .length,
        },
        {
          filterBy: "VISITOR",
          quantity: products.filter((product) => product.brand === "VISITOR")
            .length,
        },
        {
          filterBy: "PONY",
          quantity: products.filter((product) => product.brand === "PONY")
            .length,
        },
        {
          filterBy: "FORCE",
          quantity: products.filter((product) => product.brand === "FORCE")
            .length,
        },
        {
          filterBy: "E-BIKES",
          quantity: products.filter((product) => product.brand === "E-BIKES")
            .length,
        },
        {
          filterBy: "IDEAL",
          quantity: products.filter((product) => product.brand === "IDEAL")
            .length,
        },
      ],
    },
  ];

  return (
    <>
      <div className="filterContainer px-3">
        <div className="filterNavigator">
          <h1>Bikes</h1>
          <h5 className="mb-4">Filter by:</h5>
          {allFilters.map((filterCategory, index) => (
            <EachFilter
              key={index}
              eachItem={filterCategory.filterItems}
              onFilterChange={applyFilter}
            />
          ))}
        </div>
      </div>

      <CardComponent filteredBikes={filteredProducts} />
    </>
  );
};
// {
//   filterBy: "LE GRAND BIKES",
//   quantity: products.filter(
//     (product) => product.brand === "LE GRAND BIKES"
//   ).length,
// },
// {
//   filterBy: "KROSS",
//   quantity: products.filter((product) => product.brand === "KROSS")
//     .length,
// },
// {
//   filterBy: "EXPLORER",
//   quantity: products.filter((product) => product.brand === "EXPLORER")
//     .length,
// },
// {
//   filterBy: "VISITOR",
//   quantity: products.filter((product) => product.brand === "VISITOR")
//     .length,
// },
// {
//   filterBy: "PONY",
//   quantity: products.filter((product) => product.brand === "PONY").length,
// },
// {
//   filterBy: "FORCE",
//   quantity: products.filter((product) => product.brand === "FORCE")
//     .length,
// },
// {
//   filterBy: "E-BIKES",
//   quantity: products.filter((product) => product.brand === "E-BIKES")
//     .length,
// },
// {
//   filterBy: "IDEAL",
//   quantity: products.filter((product) => product.brand === "IDEAL")
//     .length,
// },
