import React from "react";

function Profile() {
  const session = null;
  if (!session) throw new Error("session not found");
  console.log('first')
  return <div>Profile</div>;
}

export default Profile;
