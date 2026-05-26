import { useState } from "react";

import ProfileSettings from "@/components/settings/ProfileSettings";
import CategorySettings from "@/components/settings/CategorySettings";

export default function Settings() {
  const [activeTab, setActiveTab] =
    useState("profile");

  return (
    <div className="space-y-6">
      <div className="flex gap-4 border-b">
        <button
          onClick={() =>
            setActiveTab("profile")
          }
        >
          Profile
        </button>

        <button
          onClick={() =>
            setActiveTab("categories")
          }
        >
          Categories
        </button>
      </div>

      {activeTab === "profile" && (
        <ProfileSettings />
      )}

      {activeTab === "categories" && (
        <CategorySettings />
      )}
    </div>
  );
}