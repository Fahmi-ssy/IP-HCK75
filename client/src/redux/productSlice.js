import { InventoryApi } from "../helper/http.client";

const { createSlice , createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

export const fetchInventory = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get(InventoryApi)
    return response.data;
})
const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInventory.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchInventory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchInventory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})
export default productSlice.reducer;