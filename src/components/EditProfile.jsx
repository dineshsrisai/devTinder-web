import { useState } from "react";

const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);

  const [error, setError] = useState("");

  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body py-5">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">FirstName</legend>
              <input
                type="text"
                className="input input-info rounded-lg"
                placeholder=""
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">LastName</legend>
              <input
                type="text"
                className="input input-info rounded-lg"
                placeholder=""
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">PhotoUrl</legend>
              <input
                type="text"
                className="input input-info rounded-lg"
                placeholder=""
                value={photoUrl}
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                }}
              />
            </fieldset>
            <div className="form-control"></div>
          </div>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="number"
                className="input input-info rounded-lg"
                placeholder=""
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <div className="form-control">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <input
                type="text"
                className="input input-info rounded-lg"
                placeholder=""
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-info rounded-lg">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
