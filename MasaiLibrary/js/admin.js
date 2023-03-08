let Submitbookdata = document
  .getElementById("Submitbookid")
  .addEventListener("click", async () => {
    let bookimg =
      document.getElementById("img-url").value ||
      "https://www.voiceinthedesert.org.uk/wp-content/uploads/2016/10/Titanic_cover_September_2016-195x300.jpg";
    let name = document.getElementById("book-name").value;
    let author = document.getElementById("author").value;
    let Genre = document.getElementById("Genre").value;
    let Edition = document.getElementById("Edition").value;
    let Publisher = document.getElementById("Publisher").value;
    let Cost = document.getElementById("Cost").value;

    const rawResponse = await fetch(
      "https://dead-blue-donkey-wrap.cyclic.app/Books",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookimg,
          name,
          author,
          Genre,
          Edition,
          Publisher,
          Cost,
        }),
      }
    );
    const content = await rawResponse.json();
    alert("Books Added Successfully");
    getBooksData();
  });

let getBooksData = async () => {
  await fetch("https://dead-blue-donkey-wrap.cyclic.app/Books")
    .then((res) => res.json())
    .then((res) => {
      DisplayBooks(res);
      console.log(res);
    });
};

getBooksData();

const DisplayBooks = (data) => {
  // document.getElementsByTagName("tr").innerHTML = null;
  data &&
    data.map((el) => {
      console.log(el.name);
      let row = document.createElement("tr");

      let img = document.createElement("td");
      img.setAttribute("class", "Imgbox");


      // data+=`<tr id=${el.name}>
      // <td>${el.name}</td>
      // <td>${el.author}</td>
      // <td>Edition : ${el.Edition}</td>
      // <td>author : ${el.author}</td>
      // <td><button onclick="Deltebookitem(event)">Delte</button> </td>

      // `

      let displaiimg = document.createElement("img");
      displaiimg.setAttribute("src", el.bookimg);
      displaiimg.setAttribute("class", "bookimg");
      img.append(displaiimg);

      let name = document.createElement("td");
      name.innerText = el.name;

      let author = document.createElement("td");
      author.innerText = el.author;

      let Edition = document.createElement("td");
      Edition.innerText = el.Edition;

      let Genre = document.createElement("td");
      Genre.innerText = el.Genre;

      let Publisher = document.createElement("td");
      Publisher.innerText = el.Publisher;

      let Cost = document.createElement("td");
      Cost.innerText = el.Cost;

      let Deleteitem = document.createElement("td");
      // Deleteitem.innerText=el.Cost

      let deletebtn = document.createElement("button");
      deletebtn.innerText = "Delete Book";

      deletebtn.addEventListener("click", () => {
        Deltebookitem(el);
      });

      Deleteitem.append(deletebtn);

      let EditItem = document.createElement("td");
      // img.innerText=el.Cost

      let Editbtn = document.createElement("button");
      Editbtn.innerText = "Edite Book";
      Editbtn.addEventListener("click", () => {
        Editbookitem(el);
      });

      EditItem.append(Editbtn);

      row.append(
        img,
        name,
        author,
        Edition,
        Genre,
        Publisher,
        Cost,
        Deleteitem,
        EditItem
      );


      document.getElementById("Diplay-Table").appendChild(row);
      // document.getElementById("Diplay-Table").innerHTML=data;
    });
};

let Deltebookitem = (data) => {
let id=data.id
 fetch(`https://dead-blue-donkey-wrap.cyclic.app/Books/${id}`, {
  method: "DELETE",
}).then((response) => response.json()).then((res)=>{
  console.log(res)
});
};

let Editbookitem = (el) => {
  console.log(el);
};
