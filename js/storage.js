/**
 *
 * @param {*} key
 * @param {*} value
 */

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

/**
 *
 * @param {*} key
 * @returns
 */
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null
    ? undefined
    : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};


/**
 *
 * @param {*} key
 * @returns
 */
const remove = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null
    ? console.log('The local storage has no record with this key')
    : localStorage.removeItem(key);
  } catch(error) {
    console.error('Remove state error: ', error.message);
  }
};

export default {
  save,
  load,
  remove
};
