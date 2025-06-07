import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useUserDetails = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { user, isLoaded } = useUser();

  async function getUserByEmail(email: string) {
    const res = await fetch(`/api/user?email=${encodeURIComponent(email)}`);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to fetch user");
    }

    const data = await res.json();
    return data.user;
  }

  useEffect(() => {
    if (isLoaded && user) {
      const email = user.emailAddresses[0]?.emailAddress ?? null;
      setUserEmail(email);
    }
  }, [isLoaded, user]);

  useEffect(() => {
    if (userEmail) {
      setLoading(true);
      getUserByEmail(userEmail)
        .then((res) => setAuthor(res.first_name))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [userEmail]);

  return { author, loading };

  return { author };
};

export default useUserDetails;
