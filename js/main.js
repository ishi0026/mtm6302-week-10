const cats = [
  {
    name: "Cat",
    bio: "Cat is an English word.",
    thumb: "images/kitten1-thumb.jpeg",
    img: "images/kitten1.jpeg"
  },
  {
    name: "Mao",
    bio: "Mao is a Cantonese word.",
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
if(catsRow){
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
          <a href="#" class="btn btn-light like" data-catname="${cat.name}" data-catbio="${cat.bio}" data-catthumb="${cat.thumb}" data-catfullimg="${cat.img}">Like</a><!--after data-xx can be named anything-->
        </div>  
      </div><!--card end-->
    </div><!--col end-->`

    //Add the card to the cats row
    catsRow.insertAdjacentHTML("beforeend", card)
}

// adding event listener to the row
catsRow.addEventListener("click", openModal)

function openModal(e) {
// delegate the event to the target element if it contains class card-img-top
    if(e.target.classList.contains("card-img-top")) {
      const fullSizeImage = e.target.dataset.fullimg //data-fullimg change to dataset.fullimg
      
      document.querySelector(".modal-body").innerHTML = `
      <img src="${fullSizeImage}" alt="placeholder kitten">
      `
    }
  }
}

//  ============================
// week11
// 1.click the event on like likeButtons
// 2.find the cat info
// 3.update button style
// 4.save the cat info to local storage
// remove the cat info LS
// update the UI

// ============================

//get the savedCats from local storage
let savedCats = localStorage.getItem("mycats")

//if the saved Cats are null then savedCats will be true 
  if (!savedCats) {
    //set savedCats to empty array
    savedCats = []
  } else {
    // is savedCats is not null until then set savedCats to parsed value of savedCats
    savedCats = JSON.parse(savedCats)
  }

// click event on like button
const likeButtons = document.querySelectorAll(".like")
if (likeButtons.length > 0) {
  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", likeCat)
    //loop over the savedCats array and check if any catName with this button cat name
    for (savedCat of savedCats){
      if(savedCat.name == likeButton.dataset.catName) {
        //update button style - applying this style every time we refresh the browser
        this.classList.remove("btn-light")
        this.classList.add("btn-danger")
        this.textContent = "Liked"
      }
    }
  }
}

function likeCat(e) {
  e.preventDefault() //cancel the default event 
  const catName = this.dataset.catname
  const catBio = this.dataset.catbio
  const catThumb = this.dataset.catthumb
  const catImg = this.dataset.catfullimg
  const catInfo = {name: catName, bio: catBio, thumb: catThumb, img: catImg}
  console.log(catInfo)

  // 4.save the cat info to local storage
  //check if the catName exists in the array from localStorage
  const catExist = findCat(catName)
  console.log(catExist)

  // if the catName existed we will get a number from findCat function
  if(catExist !== null) {
    // display an alert to user
    alert("This cat is already liked")
  } else {
    // the findCat method did not return a number 
    // push the cat object to saveCats array
    savedCats.push(catInfo)

    // stringify the saveCats array and add it to localStorage mycats
    localStorage.setItem("mycats", JSON.stringify(savedCats))

    // update button applying style to local storage
    this.classList.remove("btn-light")
    this.classList.add("btn-danger")
    this.textContent = "Liked"
  }

}

function findCat(catName) {
  for(savedCat of savedCats){
    if(savedCat.name == catName){
      return savedCats.indexOf(savedCat) // return the number of order  
    }
  }
  return null
}
// liked Cats page
//display cats from localStorage

const likedCatsRow = document.getElementById("likedCatsRow")

if(likedCatsRow) {
  // if savedCats array contains one or more cats then display the cats 
  if(savedCats.length > 0) {
    const likedCards = []
    for (cat of savedCats) {
      const card = `
      <div class="col">
       <div class="card">
          <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cat.thumb}" data-fullimg="${cat.img}" class="card-img-top" alt="placeholder kitten"><!--bring data-bs-toggle & data-bs-target to enlarge the image-->
          <div class="card-body">
            <h5 class="card-title">${cat.name}</h5>
            <p class="card-text">${cat.bio}</p>
            <a href="#" class="btn btn-light remove" data-catname="${cat.name}">Remove</a><!--after data-xx can be named anything-->
          </div><!--card-body end-->
        </div><!--card end-->
      </div><!--col end-->`
      likedCards.push(card)
    }
    likedCatsRow.innerHTML = likedCards.join("") // use "innerHTML =" not to overwrite
  } else {
    // display message that no cats were found

  }
}