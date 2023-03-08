import React from "react";
import {useEffect, useState} from "react";
import "../App.css"
const SliceMethod = () => {
  let [myproducts, setmyproducts] = useState([]);
  const [page, setpage] = useState(1);
  let getproducts = async () => {
    let resdata = await fetch(`https://dummyjson.com/products?limit=100`);
    let data = await resdata.json();
    if (data && data.products) {
      setmyproducts(data.products);
    }
  };

  let selectedpage = (selectedpage) => {
    if(selectedpage>=1 && selectedpage<=myproducts.length/10 && selectedpage!==page){
        setpage(selectedpage);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="App">
      {myproducts.slice(page * 10 - 10, page * 10).map((el) => (
        <div key={el.id}>
          <p>{el.description}</p>
        </div>
      ))}

      {myproducts.length > 0 && (
        <div className="pagination">
            
          <span  onClick={()=>selectedpage(page-1)}  className={page>1? "":"disabeld"}>prve</span>

          {[...Array(myproducts.length / 10)].map((_, index) => {
            return (
              <span
                className={page == index + 1 ? "active" : "inactive"}
                onClick={() => selectedpage(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}
          <span onClick={()=>selectedpage(page+1)} className={page<myproducts.length/10 ? "":"disabeld"}>next</span>
        </div>
      )}
    </div>
  );
};

export default SliceMethod;
