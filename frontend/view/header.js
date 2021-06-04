import Components from "../controls/Components.js";

class Header extends Components {
  constructor() {
    super();
    this.alpabet = [...new Array(32)].map((item, i) => {
      return String.fromCharCode(1072 + i).toUpperCase();
    });
  }

  searchOnData(target, array) {
    const value = new RegExp(`${target.value.trim()}`, "i");
    const div = document.querySelector(".inputWrapper").children[1];
    let html = "";

 
    (value.toString() === "/(?:)/i") ? target.value = "" : array.forEach((compositor) => {
          if (value.test(compositor.name)) {
              html += `<a href="#/compositions/${compositor.name}">${compositor.name}</a>`;
          } 
        }
    );
    div.innerHTML = html;
    (div.innerHTML)?div.classList.remove('hide'):div.classList.add('hide');
  }

  createMenuList(array) {
    let list = array.map((item) => {
      return `<div class="menu_item">${item}</div>`;
    });
    return list.join("");
  }

  contentMenu() {
    return new Promise((resolve) => {
      const hash = location.hash.split("/")[1];
      if (
        hash === "compositors" ||
        hash === "compositions" ||
        hash === undefined
      ) {
        resolve(this.createMenuList(this.alpabet));
      }
      if (hash === "artist") {
        resolve(`<div class="menu_item">Исполнители</div>`);
      }
      if (hash === "epoch") {
        resolve(`<div class="menu_item">Эпохи</div>`);
      }
      if (hash === "countries") {
        resolve(`<div class="menu_item">Страны</div>`);
      }
    });
  }

  render() {
    return new Promise((resolve) => {
      // <a class="nav__main_item" href="#/epoch">Эпохи</a>
      // <a class="nav__main_item" href="#/countries">Страны</a>
      // <a class="nav__main_item" href="#/artist">Исполнители</a>
      resolve(`
                <header class="header">
                    <img class="nav__logo" src="../../backend/source/image/logo.png" alt="logo">
                    <div class="inputWrapper"><input class="nav__main_input" type="text" placeholder="Поиск..."><div class="hide"></div></div>
                    <nav class='nav__main'>
                        <a class="nav__main_item" href="#/compositors">Композиторы</a>
                        
                        <a class="nav__main_item" href="#/compositions">Произведения</a>
                    </nav>
                </header>
                <nav class="menu">
                </nav>
            `);
    });
  }

  afterRender(data) {
    return new Promise((resolve) => {
      const menu = document.getElementsByClassName("menu")[0],
        inputWrapper = document.querySelector(".inputWrapper").children,
        navMenu = document.querySelectorAll(".nav__main_item");

      navMenu.forEach((item) => {
        const hash = location.hash.split("/")[1];
        if (item.href.split("/")[4] === hash) {
          item.classList.add("active_item");
        }
        this.contentMenu().then((html) => (menu.innerHTML = html));
      });

      resolve(function () {
        menu.childNodes.forEach((item) => {
          let div = document.createElement("div");
          div.classList.add("hide");
          div.classList.add("menu-item_name");

          data.map((elem) => {
            const opers = elem.opera
                ? elem.opera
                    .map((opera) => {
                      return `<li class='hide menu-item_li'>${opera.name}</li>`;
                    })
                    .join("")
                : "",
              camer = elem.camer
                ? elem.camer
                    .map((camer) => {
                      return `<li class='hide menu-item_li'>${camer.name}</li>`;
                    })
                    .join("")
                : "",
              cont = elem.cont
                ? elem.cont
                    .map((cont) => {
                      return `<li class='hide menu-item_li'>${cont.name}</li>`;
                    })
                    .join("")
                : "";

            let regExp = new RegExp(`^${item.innerText}`, "i");
            if (regExp.test(elem.name)) {
              div.insertAdjacentHTML(
                "beforeend",
                `<ul class='flex'><p><a href="#/compositions/${elem.name}">${
                  elem.name
                }</></p>
                                    <div class='hide'>
                                        <ul class="${
                                          elem.hasOwnProperty("opera")
                                            ? "menu-item_ul"
                                            : "hide"
                                        } ">Оперы
                                            ${opers}
                                        </ul>
                                        <ul class="${
                                          elem.hasOwnProperty("camer")
                                            ? "menu-item_ul"
                                            : "hide"
                                        }">Камерно-вокальные
                                            ${camer}
                                        </ul>
                                        <ul class="${
                                          elem.hasOwnProperty("cont")
                                            ? "menu-item_ul"
                                            : "hide"
                                        }">Контаты и оратории
                                            ${cont}
                                        </ul>
                                    </div>
                                </ul>`
              );
              item.appendChild(div);
            }
          });

          if (item.children.length) {
            item.childNodes.forEach((node, index) => {
              if (index > 0) {
                item.addEventListener("mouseover", (e) => {
                  node.classList.remove("hide");
                });
                item.addEventListener("mouseout", (e) => {
                  node.classList.add("hide");
                });

                node.childNodes.forEach((ul) => {
                  ul.addEventListener("mouseover", (e) => {
                    ul.querySelector("div").classList.remove("hide");
                    ul.querySelectorAll(".menu-item_ul").forEach((item) => {
                      item.addEventListener("mouseover", (e) => {
                        for (let li of item.children) {
                          li.classList.remove("hide");
                        }
                      });
                    });
                  });
                  ul.addEventListener("mouseout", (e) => {
                    ul.querySelector("div").classList.add("hide");
                    ul.querySelectorAll(".menu-item_ul").forEach((item) => {
                      item.addEventListener("mouseout", (e) => {
                        for (let li of item.children) {
                          li.classList.add("hide");
                        }
                      });
                    });
                  });
                });
              }
            });
          }
        });
      });

      inputWrapper[0].addEventListener("keyup", (e) => {
        this.searchOnData(e.currentTarget, data);
      });
    });
  }
}

export default Header;
