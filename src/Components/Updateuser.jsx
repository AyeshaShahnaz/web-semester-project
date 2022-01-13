import axios from "axios";
import { useState } from "react";


const Updateuser = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const { id } = props.match.params;
  console.log(id);

  
  const addDetails = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.put(`http://localhost:5000/updateData/${id}`, {
        LastName,
        FirstName,
      });
     
      window.location = "/viewUser";
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    <div className="col-md-6 mt-5 pb-5 " style={{marginLeft: "400px"}}>
      <form>
        <label className="mb-2">First Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />{" "}
        <label className="mb-2">Last Name</label>
        <input
          type="text"
          className="form-control mb-3"
          name="studentName"
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <button
          className="btn btn-primary form-control"
          onClick={(e) => addDetails(e)}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Updateuser;
