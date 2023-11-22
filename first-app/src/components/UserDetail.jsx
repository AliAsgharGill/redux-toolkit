import DeleteAllUser from "./DeleteAllUser";

const UserDetail = () => {
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitiel">List of User Details</div>
          <button className="bg-red-600  rounded-lg p-2 font-bold text-white text-md">
            Add New User
          </button>
        </div>
        <ul>
          
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetail;
