var arr = [];

let getBooksData = async () => {
  await fetch("https://dead-blue-donkey-wrap.cyclic.app/Books")
    .then((res) => res.json())
    .then((res) => {
      arr = res;
      DisplayBooks(arr);
      console.log(arr);
    });
};

getBooksData();

let DisplayBooks = (data) => {
  document.getElementById("Show-all-books").innerHTML = null;

  data &&
    data.map((el) => {
      let cartdiv = document.createElement("div");
      cartdiv.setAttribute("class", "cart");

      let img = document.createElement("img");
      img.setAttribute("src", el.bookimg);

      let contentbox = document.createElement("div");

      contentbox.setAttribute("class", "cartcontent");

      let booktitle = document.createElement("h3");
      booktitle.innerText = el.name;

      let author = document.createElement("p");
      author.innerText = "Authr : " + el.author;

      let Genre = document.createElement("p");
      Genre.innerText = "Gener : " + el.Genre;

      let Edition = document.createElement("p");
      Edition.innerText = "Edition: " + el.Edition;

      let Publisher = document.createElement("p");
      Publisher.innerText = "Publisher : " + el.Publisher;
      let cost = document.createElement("p");
      cost.innerText = "Cost : " + el.Cost;

      let Borrowbtn = document.createElement("button");
      Borrowbtn.innerText = "Borrow";

      Borrowbtn.addEventListener("click", () => {
        openModal(el);
      });

      contentbox.append(
        booktitle,
        author,
        Genre,
        Edition,
        Publisher,
        cost,
        Borrowbtn
      );

      cartdiv.append(img, contentbox);
      document.getElementById("Show-all-books").append(cartdiv);
    });
};

const Sortdata = () => {
  let Sortval = document.getElementById("Edition").value;
  let array;
  if (Sortval == "desc") {
    array = arr.sort((a, b) => {
      if (Number(a.Cost) > Number(b.Cost)) {
        return -1;
      }
      return 1;
    });
  } else {
    array = arr.sort((a, b) => {
      if (Number(a.Cost) > Number(b.Cost)) {
        return 1;
      }
      return -1;
    });
  }
  DisplayBooks(array);
};

const FilterBy = () => {
  let FlterVal = document.getElementById("Genre").value;

  if(FlterVal=="none"){
    getBooksData()
    return
  }

  let filteredData=arr.filter((el)=>el.Genre==FlterVal)

  DisplayBooks(filteredData)
};
