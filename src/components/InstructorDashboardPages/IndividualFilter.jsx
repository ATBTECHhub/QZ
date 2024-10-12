import { useEffect, useState } from "react";
import Request from "../../lib/requests";
import { Axios } from "../../config";

const IndividualFilter = () => {
  const [users, setUsers] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(Request.createUser);
        const allUsers = response.data;
        const lastFiveUsers = allUsers.slice(-5).reverse();
        setUsers(allUsers);
        setRecentUsers(lastFiveUsers);
        setFilteredUsers(lastFiveUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setDropdown(true);
    if (query === "") {
      setFilteredUsers(recentUsers);
    } else {
      const filtered = users.filter((user) =>
        user.email.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  const handleSelectUser = (email) => {
    setSearchQuery(email);
    setDropdown(false);
  };
  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-[0px_4px_28.3px_3px_#00000012] pt-4 pl-8 pb-8 pr-[58px]">
        <label
          htmlFor="userSelection"
          className="text-darkPrimary text-base font-extrabold mb-3"
        >
          User Selection
        </label>
        <input
          type="text"
          id="userSelection"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for user"
          className="w-full p-2 border border-gray-300 rounded-lg pt-3 px-5 mb-4 outline-none"
        />
      </div>
      {dropdown && (
        <div className="bg-white mt-3 border border-gray-300 rounded-xl shadow-md pt-4 pl-8 pb-8 pr-[58px] ">
          <p className="text-darkPrimary text-base font-extrabold mb-3 px-2 pt-2">
            Recent users
          </p>
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-200 last:border-b-0 cursor-pointer"
              onClick={() => handleSelectUser(user.email)}
            >
              {user.email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndividualFilter;
