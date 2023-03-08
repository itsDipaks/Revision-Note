import React from "react";
import {useEffect, useState} from "react";
const ApiMethod = () => {
  let [myproducts, setmyproducts] = useState([]);
  const [page, setpage] = useState(2);
  const [totalpages,settotalpages]=useState(0)
  let getproducts = async () => {
    let resdata = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    let data = await resdata.json();
    if (data && data.products) {
      setmyproducts(data.products);
      settotalpages(data.total/10)
    }
  };

  let selectedpage = (pageindex) => {
    setpage(pageindex);
    
  };

  useEffect(() => {
    getproducts();
  }, [page]);
  return (
    <div>
      <div className="App">
        {myproducts.map((el) => (
          <div key={el.id}>
            <p>{el.description}</p>
          </div>
        ))}

        {myproducts.length > 0 && (
          <div className="pagination">
            <span>prve</span>

            {[...Array(totalpages)].map((_, index) => {
              return (
                <span
                  className={page == index + 1 ? "active" : "inactive"}
                  onClick={() => selectedpage(index + 1)}
                >
                  {index + 1}
                </span>
              );
            })}
            <span>next</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiMethod;
