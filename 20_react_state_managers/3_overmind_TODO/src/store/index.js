import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
import { actions } from "./actions";
import { state } from "./state";

// Create an Overmind instance with the state and actions
const config = {
  state,
  actions,
};

export const overmind = createOvermind(config);
export const useOvermind = createHook();
