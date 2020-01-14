import React, { useState } from 'react';

function Avatar({ avatar, removeAvatar }) {
    let message;

    message = <div className="profile" style={{ width: '30%', margin: 'auto' }}>
        <div className="card" style={{ width: '100rem', marginBottom: '30px'}}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            {avatar.user.id ? <img src={avatar.user.avatar} alt="test" /> : ""}
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{avatar.user.first_name} {avatar.user.last_name}</p>
                        <p className="subtitle is-6">{avatar.user.email}</p>
                    </div>
                </div>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.</p>
                     <button className="button is-danger" onClick={() => removeAvatar(avatar.user.id)}>Remove</button>
                    <br />
                    <time> {avatar.time}</time>
                </div>
            </div>
        </div>
    </div>
    return (
        <div>
            {avatar.isLoading ? "Loading..." : message}
        </div>
    );
}

function AvatarForm({ addAvatar }) {
    const [value, setValue] = useState("");

    const submitForm = e => {
        e.preventDefault();
        addAvatar(value);
        setValue("");
    }
    return (
        <form onSubmit={submitForm}>
            <div className="field">
                <div className="control">
                    <input className="input is-primary" type="text" placeholder="Enter User ID" value={value} onChange={e => setValue(e.target.value)} />
                </div>
            </div>
        </form>
    );
}


export { Avatar, AvatarForm };