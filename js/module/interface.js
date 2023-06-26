export class Interface {
  constructor(api) {
    this.app = document.getElementById("app");

    this.searchContainer = this.createElement("div", "container-f");
    this.searchInput = this.createElement("input", "form-controlcustom");
    this.searchCounter = this.createElement("span", "counter");
    this.searchContainer.append(this.searchInput);
    this.searchContainer.append(this.searchCounter);

    this.main = this.createElement("div", "container-f");

    this.app.append(this.searchContainer);
    this.app.append(this.main);
  }

  createElement(elementName, className) {
    const element = document.createElement(elementName);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  createUser(userData) {
    this.collums = this.createElement("div", "row");
    this.collums.setAttribute("style", "justify-content: center;");
    this.collums.classList.add("my-2");
    //this.collums.classList.add("row", "row-cols-1", "row-cols-lg-3", "my-1");
    const userAvatar = this.createElement("div", "coll-sm-2");
    const userLogin = this.createElement("div", "coll-sm-4");
    const userLink = this.createElement("div", "coll-sm-6");
    userAvatar.innerHTML = `<img class="imgx w-100 h-100" src="${userData.avatar_url}">`;
    userLogin.innerHTML = `<span class="custom-control-label">${userData.login}</span>`;
    userLink.innerHTML = `<p><a class="truncateLongTexts link-opacity-100 custom-control-label" target="_blank" href="${userData.html_url}">${userData.html_url}</a></p>`;

    this.collums.append(userAvatar);
    this.collums.append(userLogin);
    this.collums.append(userLink);
    this.main.append(this.collums);
  }

  clearUsers() {
    this.main.innerHTML = "";
  }
}
