import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "./store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";
const UserDetail = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    // console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="text-center font-bold text-4xl p-3  ">
            List of User Details
          </div>
          <button
            className="bg-red-600  rounded-lg p-2 font-bold text-white text-md"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </button>
        </div>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetail;
