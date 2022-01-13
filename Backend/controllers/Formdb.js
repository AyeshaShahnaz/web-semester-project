import FormdbModel from "../models/Formdb.js";
export const getData= async (req, res) => {
       try {
         const FormdbUsers = await FormdbModel.find();
         res.json(FormdbUsers);
       } catch (error) {
         console.log("Not found any data.");
       }
      };
export const getuserData = async (req, res) => {
  console.log("im here");
  const id = req.params.id;

  let user;
  try {
    user = await FormdbModel.findById(id);
    res.json(user);
  } catch (error) {
    console.log("There was an error finding applicant");
  }
};
export const createData= async (req,res) => {
      console.log("hi");
      const result=req.body;
      console.log(result);
      const FirstName = req.body.FirstName;
      const FirstNameInStringFormat = FirstName.toString();

      const LastName = req.body.LastName;
      const LastNameInStringFormat = LastName.toString();

      const Email = req.body.Email;
      const EmailInStringFormat = Email.toString();
      
      const newUser = new FormdbModel({
        FirstName: FirstNameInStringFormat,
        LastName: LastNameInStringFormat,
        Email: EmailInStringFormat,
        
      });

      try {
        await newUser.save();
        res.json(newUser);
      } catch (error) {
        console.log("Not saved...");
      }
};
export const deleteData = async (req, res) => {
  const id = req.params.id;

  let deleteData;
  try {
    deleteData = await FormdbModel.findByIdAndDelete(id);
    res.json(deleteData);
  } catch (error) {
    console.log("Not deleted .... ");
  }
};
export const updateData = async (req, res) => {

  const id = req.params.id
  
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;

  console.log(FirstName, LastName);

  let updateData;
  try {
    updateData = await FormdbModel.findByIdAndUpdate(
      id,
      { FirstName, LastName },
      { new: true }
    );
    res.json(updateData);
  } catch (error) {
    console.log("Couldn't Be Updated Yet!!");
  }
};