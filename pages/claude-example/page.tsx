import { useState } from 'react';
import { useUserData } from "./hooks";


function ClaudeExamplePage() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const { user, loading } = useUserData(selectedUserId);

  return (
    <div>
      <div>
        <button onClick={() => setSelectedUserId(1)}>User 1</button>
        <button onClick={() => setSelectedUserId(2)}>User 2</button>
        <button onClick={() => setSelectedUserId(3)}>User 3</button>
      </div>

      {!user || loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>ID: {user.id}</p>
        </div>
      )}
    </div>
  );
}

export default ClaudeExamplePage