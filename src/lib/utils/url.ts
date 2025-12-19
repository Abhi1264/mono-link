/**
 * Constructs a profile URL for a given username
 * @param username - The username to create profile URL for
 * @returns Full profile URL (e.g., "http://localhost:3000/john" or "https://zylink.vercel.app/john")
 * 
 * Note: Currently uses path-based routing. When a custom domain is added,
 * this can be switched to subdomain routing (e.g., "https://john.yourdomain.com")
 */
export function getProfileUrl(username: string): string {
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000';
  const protocol = rootDomain.includes('localhost') ? 'http' : 'https';
  
  // Path-based routing (works on Vercel's .vercel.app domains)
  return `${protocol}://${rootDomain}/${username}`;
  
  // Subdomain routing (uncomment when custom domain is added):
  // return `${protocol}://${username}.${rootDomain}`;
}

