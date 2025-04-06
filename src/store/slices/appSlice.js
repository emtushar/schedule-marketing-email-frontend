import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    flowData: {
      nodes: [],
      edges: [],
    },
  },
  reducers: {
    addFlowData: (state, action) => {
      state.flowData.nodes = action.payload.nodes;
      state.flowData.edges = action.payload.edges;
    },
  },
});

export const { addFlowData } = appSlice.actions;

export default appSlice.reducer;
