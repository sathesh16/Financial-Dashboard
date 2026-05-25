import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/profileService";



export default function Settings() {
  const [profile, setProfile] = useState(null);

  const [fullName, setFullName] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();

      setProfile(data.profile);

      setFullName(data.profile.full_name || "");
    }

    loadProfile();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await updateProfile(fullName);

      setProfile(data.profile);

      alert("Profile updated");
    } finally {
      setLoading(false);
    }
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label>Email</label>

        <input
          value={profile.email}
          disabled
          className="w-full"
        />
      </div>

      <div>
        <label>Full Name</label>

        <input
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          className="w-full"
        />
      </div>

      <button
        disabled={loading}
      >
        Save
      </button>
    </form>
  );
}