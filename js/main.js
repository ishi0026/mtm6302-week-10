const cats = [
  {
    name: "Cat",
    bio: "Cat is an English word.",
    thumb: "images/kitten1-thumb.jpeg",
    img: "images/kitten1.jpeg"
  },
  {
    name: "Mao",
    bio: "Mao is is a Cantonese word.",
    thumb: "images/kitten2-thumb.jpeg",
    img: "images/kitten2.jpeg"
  },
  {
    name: "Gato",
    bio: "Gato is a Spanish word",
    thumb: "images/kitten3-thumb.jpeg",
    img: "images/kitten3.jpeg"
  },
  {
    name: "Billi",
    bio: "Billi is a Hindi word.",
    thumb: "images/kitten4-thumb.jpeg",
    img: "images/kitten4.jpeg"
  },
  {
    name: "Chat",
    bio: "Chat is a French word.",
    thumb: "images/kitten5-thumb.jpeg",
    img: "images/kitten5.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Polish word.",
    thumb: "images/kitten6-thumb.jpeg",
    img: "images/kitten6.jpeg"
  },
  {
    name: "Kit",
    bio: "Kit is a Ukrainian word.",
    thumb: "images/kitten7-thumb.jpeg",
    img: "images/kitten7.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Russian word.",
    thumb: "images/kitten8-thumb.jpeg",
    img: "images/kitten8.jpeg"
  }
]

const catsRow = document.getElementById("catsRow")

// loop over the array of data
for (const cat of cats) {
  console.log(cat.name)
  const card = `
    <div class="col">
     <div class="card">
        <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cat.thumb}" data-fullimg="${cat.img}" class="card-img-top" alt="placeholder kitten"><!--bring data-bs-toggle & data-bs-target to enlarge the image-->
        <div class="card-body">
          <h5 class="card-title">${cat.name}</h5>
          <p class="card-text">${cat.bio}</p>
          <a href="#" class="btn btn-light">Like</a>
        </div>
     </div><!--card end-->
    </div><!--col end-->`

    //Add the card to the cats row
    catsRow.insertAdjacentHTML("beforeend", card)
}
