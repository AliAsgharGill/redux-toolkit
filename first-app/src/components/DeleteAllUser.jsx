import { useDispatch } from "react-redux";
import { deleteUsers } from "./store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  };
  return (
    <button
      className="bg-red-600 p-3 text-white font-bold rounded-lg"
      onClick={() => deleteAllUsers()}
    >
      Delete All Users
    </button>
  );
};

export default DeleteAllUser;
