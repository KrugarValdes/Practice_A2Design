const USER_PER_PAGE = 10;
const URL = "https://api.github.com/";

export class API {
  constructor() {}

  // Загрузка пользователей
  async loadUsers(searchValue) {
    return await fetch(
      `${URL}search/users?q=${searchValue}&per_page=${USER_PER_PAGE}`
    );
  }
}
