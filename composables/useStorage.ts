import { createStorage } from "unstorage";
import localStorageDriver from "unstorage/drivers/localstorage";
const storage = createStorage({
  driver: localStorageDriver({ base: "app:" }),
});
export default storage;
