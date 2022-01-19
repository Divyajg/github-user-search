import React, { useContext} from "react";
import UserContext from "./UserContext";

export default function RenderSearchResult() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <h3 className="centerText">Loading...</h3>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {!users || users.length === 0 ? (
        <li className="centerAlign">No users found</li>
      ) : (
        users.map((user) => {
          return (
            <li key={user.id} className="listStyle">
              <img src={user.avatar_url} alt="Avatar_GitHub"/><br/>
              <a href={user.html_url}> {user.login}</a> <br />
            </li>
            );
        })
      )}
    </ul>
  );
}