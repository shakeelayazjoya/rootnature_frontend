// export const base_url = "http://localhost:5000/api/";
export const base_url = "https://stingray-app-h9j4v.ondigitalocean.app/api/";

const getTokenFromLocalStorage = () => {
  try {
    const storedCustomer = localStorage.getItem("customer");
    if (storedCustomer && storedCustomer !== "undefined") {
      return JSON.parse(storedCustomer);
    }
  } catch (error) {
    console.error("Error parsing customer from localStorage", error);
  }
  return null;
};

const tokenData = getTokenFromLocalStorage();

export const config = {
  headers: {
    Authorization: `Bearer ${tokenData ? tokenData.token : ""}`,
    Accept: "application/json",
  },
};
