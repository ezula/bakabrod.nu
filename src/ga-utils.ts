import * as ReactGA from "react-ga";

export const initGA = (id: string) => {
  //if (process.env.NODE_ENV === "production") {
    console.log('initGA called with id: ', id)
    ReactGA.initialize(id);
  //}
};
