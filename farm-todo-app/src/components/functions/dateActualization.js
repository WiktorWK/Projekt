import { DATE_URL } from "./../constants";

const dateActualization = (val, setDatefun) => {
  setDatefun(new Date().toISOString());

  fetch(`${DATE_URL}`)
  .then((res) => res.json())
  .then((res) => setDatefun(res))
  .catch((err) => console.log(err));
};

export default dateActualization;

