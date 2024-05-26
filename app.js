const express = require("express");
const mongoose = require("mongoose");
const UserSchema = require('./Schema/UserSchema')
const cors = require("cors");
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(cors());
const userRoutes = require('./Routes/UserRoutes');
const userExpense = require('./Routes/ExpenseRoutes');
app.use('/userRegister',userRoutes);
app.use('/userAddExpense',userExpense);
const adaRoutes = require('./Routes/AdaRoutes');
app.use('/user',adaRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/cw1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("error..", err);
})

app.listen(PORT, () => {
    console.log("server started on port",PORT);
});











