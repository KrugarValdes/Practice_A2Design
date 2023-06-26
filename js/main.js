import { API } from "./module/api.js";
import { Interface } from "./module/interface.js";
import { Search } from "./module/search.js";

const api = new API();

new Search(api, new Interface(api));
