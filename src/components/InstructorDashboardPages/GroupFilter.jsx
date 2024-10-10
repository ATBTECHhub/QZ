import { useEffect, useState } from "react";
import Request from "../../lib/requests";
import { Axios } from "../../config";

const GroupFilter = () => {
  const [groups, setGroups] = useState([]);
  const [recentGroups, setRecentGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdown, setDropdown] = useState(true);
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await Axios.get(Request.createGroup);
        console.log(response);
        const allGroups = response.data;
        const lastFiveGroups = allGroups.slice(-5).reverse();
        setGroups(allGroups);
        setRecentGroups(lastFiveGroups);
        setFilteredGroups(lastFiveGroups);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroups();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setDropdown(true);
    if (query === "") {
      setFilteredGroups(recentGroups);
    } else {
      const filtered = groups.filter((group) =>
        group.groupName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGroups(filtered);
    }
  };

  const handleSelectGroup = (groupName) => {
    setSearchQuery(groupName);
    setDropdown(false);
  };
  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-[0px_4px_28.3px_3px_#00000012] pt-4 pl-8 pb-8 pr-[58px]">
        <label
          htmlFor="groupSelection"
          className="text-darkPrimary text-base font-extrabold mb-3"
        >
          Group Selection
        </label>
        <input
          type="text"
          id="groupSelection"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for group name"
          className="w-full p-2 border border-gray-300 rounded-lg pt-3 px-5 mb-4 outline-none"
        />
      </div>
      {dropdown && (
        <div className="bg-white mt-3 border border-gray-300 rounded-xl shadow-md pt-4 pl-8 pb-8 pr-[58px] ">
          <p className="text-darkPrimary text-base font-extrabold mb-3 px-2 pt-2">
            Recent groups
          </p>
          {filteredGroups.map((group, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-200 last:border-b-0 cursor-pointer"
              onClick={() => handleSelectGroup(group.groupName)}
            >
              {group.groupName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupFilter;
