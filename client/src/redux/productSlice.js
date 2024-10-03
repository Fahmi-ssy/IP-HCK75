const { createSlice , createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

export fetchInventory = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get()
    return response.data;
})