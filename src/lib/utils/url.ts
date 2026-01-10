/**
 * Constructs a profile URL for a given username
 * @param username - The username to create profile URL for
 * @returns Full profile URL (e.g., "http://john.localhost:3000" or "https://john.yourdomain.com")
 */
export function getProfileUrl(username: string): string {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
  const protocol = rootDomain.includes("localhost") ? "http" : "https";

  // Subdomain routing
  return `${protocol}://${username}.${rootDomain}`;
}
