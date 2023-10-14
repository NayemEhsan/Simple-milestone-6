// for counting data
let count = 0;
const loadCategory = async()=>{
   
  const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await response.json();
//   console.log(data.data.news_category); 
  const fullData = data.data.news_category;
//   first i take the id form html code 

  const tabContainer = document.getElementById("tab-container");
// then i declare a for each function to loop through the array
fullData.slice(0,3).forEach((category) => {
    count = count + 1;
    const div = document.createElement("div");
    div.innerHTML= `
    <a onclick = "singleCategory('${category.category_id}')" class="tab">${count}  ${category.category_name}</a>`
    // pass data in onclick function
    tabContainer.appendChild(div);
  })
  
}

const singleCategory=async(categoryId)=>{
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data);
    const cartContainer = document.getElementById("cart-container");
    const singleData = data.data;
    singleData.forEach((news)=>{
        const div = document.createElement('div');
        div.innerHTML= `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${news ?.image_url}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">${news ?.rating ?.badge}</div>
          </h2>
          <p>${news?.details.slice(0,50)}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
        `
        cartContainer.appendChild(div);

    })
    
}


loadCategory()