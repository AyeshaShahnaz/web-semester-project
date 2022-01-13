import mongoose from 'mongoose';


const FormdbStructure= mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email:String,
    Password:String,
    Confirm_Password:String,
});
const FormdbModel = mongoose.model('Formdb', FormdbStructure);

export default FormdbModel;