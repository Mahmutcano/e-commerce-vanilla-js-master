const productList = [];
const tabs = document.querySelectorAll(".v-pills-tab, button");
const dataTabsOne = document.getElementById(".Size Özel");
const dataTabsTwo = document.getElementById(
  ".Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"
);
const dataTabsThree = document.getElementById(
  ".Beyaz Eşya & Küçük Ev Aletleri > Isıtma, Soğutma Sistemi"
);
const dataTabsForth = document.getElementById(
  ".Bilgisayar, Tablet > Dizüstü Bilgisayar (Laptop)"
);
const dataTabsFive = document.getElementById(
  ".Ev, Dekorasyon, Bahçe > Mobilya"
);
const dataTabsSix = document.getElementById(
  ".Kozmetik & Kişisel Bakım > Sağlık, Medikal"
);

const filtered = () => {
  tabs.forEach((element) => {
    element.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
        
      });
      element.classList.add("active");
      const tabVal = element.getAttribute("data-tabs");

      fetch("./product.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let dataProduct = "";
          let productImage = data.responses[0][0].params.recommendedProducts[
            `${tabVal}`
          ].map((x) => x.image);
          console.log(tabVal);
          productImage.map((item) => {
            dataProduct += `<div class="item">
<div>
  <div class="card">
    <img
      src="${item}"
      class="card-img-top"
      alt="Phone"
    />
    <div class="card-body">
      <h5 class="card-title">Super Phone</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        199$
      </h6>
      <button href="#" class="btn btn-primary">
        Add to Cart
      </button>
    </div>
  </div>
</div>
</div>`;
          });
          document.getElementById("cards").innerHTML += dataProduct;
        })
        .catch((err) => console.log(err));
    });
  });
};

setTimeout(() => {
  filtered();
}, 100);
