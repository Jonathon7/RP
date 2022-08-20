import axios from "axios";

let category;
let categoryChildren;
let brand;
let options;
let optionValues;
let tags;
let compatibility;
let productImage;
let badge;

const xkglow = async () => {
    let products = await axios
        .get("/api/xkglow")
        .then((res) => {
            products = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    console.log(products);
};

export default xkglow;
