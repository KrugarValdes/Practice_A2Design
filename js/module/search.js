export class Search {
  constructor(api, UI) {
    this.api = api;
    this.UI = UI;
    this.UI.searchInput.addEventListener(
      "keyup",
      this.debounce(this.searchUsers.bind(this), 1500)
    ); // Поиск пользователей(debounce())
  }

  // Выполняем поиск пользователей при каждом вводе символа в поисковую строку
  searchUsers() {
    if (this.UI.searchInput.value) {
      this.api
        .loadUsers(this.UI.searchInput.value)
        .then((response) => this.updateUsers(response));
    } else {
      this.UI.clearUsers();
    }
  }

  // Обновляем текущее состояние пользователей
  updateUsers(response) {
    let users;
    let usersCount;
    if (response.ok) {
      this.UI.clearUsers();
      response.json().then((res) => {
        if (res.items) {
          const users = res.items;
          users.forEach((user) => this.UI.createUser(user));
        } else {
          this.UI.clearUsers();
        }
      });
    } else {
      console.log("Error 1" + response.status);
    }
  }

  // Задержка ввода данных для отправки запроса
  debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
