import { useEffect, useState } from "react";
import "./App.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Тут список пользователей: https://reqres.in/api/users

export default function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  function onChangeSearchValue(event) {
    setSearchValue(event.target.value);
  }

  function onClickInvite(id) {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  }

  function onClickSendInvites() {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites}/>
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}
