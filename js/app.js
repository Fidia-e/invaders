import { map } from "./map.js";

let app = {
  elements: {},

  init: function () {
    app.elements.nav = document.querySelector(".select-model");
    app.elements.invaderCtn = document.querySelector("#invader");

    app.elements.models = map.models;
    app.elements.types = app.types;

    app.displayInvader();
  },

  handleClick: function (e) {
    e.preventDefault();

    const invaderName = e.target.dataset.itemNav;
    app.elements.invaderCtn.replaceChildren("");

    app.elements.models[invaderName].map((e) => {
      let div = document.createElement("div");
      let ligne = document.createTextNode(e);

      app.elements.invaderCtn.appendChild(div);
      div.classList.add("invaderLine");

      let divToArray = Object.values(div);
      divToArray.push(ligne);
      let divToArrayValues = Object.values(divToArray[0].data);

      divToArrayValues.map((e) => {
        let p = document.createElement("p");
        let char = document.createTextNode(e);

        div.appendChild(p);
        p.appendChild(char);

        if (p.innerText === "-") {
          p.classList.add("empty");
        } else if (p.innerText === "x") {
          p.classList.add("plain");
        } else if (p.innerText === "o") {
          p.classList.add("light");
        } else {
          p.classList.add("highlight");
        }
      });
    });
  },

  displayInvader: function () {
    for (const item in app.elements.models) {
      let btn = document.createElement("button");
      let contentNavItem = document.createTextNode(item);

      app.elements.nav.appendChild(btn);
      btn.appendChild(contentNavItem);
      btn.dataset.itemNav = item;

      btn.classList.add("btn");

      btn.addEventListener("click", app.handleClick);
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init);
