import { useState } from 'react';
import Button from './Button';

let nextId = 4;

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ]);
  const [newUser, setNewUser] = useState({ id: null, name: '', avatar: false });

  const addUser = () => {
    setUsers([
      ...users,
      { ...newUser, id: nextId++, avatar: newUser.avatar ? `https://i.pravatar.cc/150?u=${newUser.name}` : '' }
    ])

    setNewUser({ name: '', avatar: false })
  }

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id))
  }

  const editUser = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        // { id: user.id, name: user.name.toUpperCase(), avatar: user.avatar }
        let newName = user.name.toUpperCase()
        if (newName === user.name) {
          newName = user.name.toLowerCase()
        }

        return { ...user, name: newName }
      }

      return user
    }))
  }

  const handleChange = (value, field) => {
    setNewUser({ ...newUser, [field]: value })
  }

  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <h2 onDoubleClick={() => editUser(user.id)}>{user.name}</h2>
            {user.avatar && <img src={user.avatar} alt={user.name} />}
            <Button onClick={() => deleteUser(user.id)}>Supprimer</Button>
          </li>
        )}
      </ul>
      {JSON.stringify(newUser)}
      <input type="text" value={newUser.name} onChange={(event) => handleChange(event.target.value, 'name')} />
      <input type="checkbox" checked={newUser.avatar} onChange={(event) => handleChange(event.target.checked, 'avatar')} />
      <Button onClick={addUser} disabled={!newUser.name}>Ajouter</Button>
    </>
  );
}

export default List;
