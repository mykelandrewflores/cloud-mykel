import React, { useState } from 'react';
import { Avatar, AvatarForm } from './Avatar';
import axios from 'axios';
import './Forms.css';


function Forms() {
    const [avatars, setAvatar] = useState([]);

    const addAvatar = id => {
      axios.get('https://reqres.in/api/users/' + id)
      .then((res) => {
          const newAvatar = [ ...avatars, { user: res.data.data, isError: false, isLoading: false } ];
          setAvatar(newAvatar);
        });
    }
  
    const removeAvatar = index => {
      let newAvatar = avatars.filter(avatar => avatar.user.id !== index);
      setAvatar(newAvatar);
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Reactors</h1>
          <AvatarForm addAvatar={addAvatar} />
          {avatars.map((avatar, index) => (<Avatar key={index} avatar={avatar}  removeAvatar={removeAvatar} />))}
        </header>
      </div>
    );
  
}

export default Forms
