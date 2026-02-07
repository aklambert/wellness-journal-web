/**
 * React Router actions for authentication
 * Handles form submissions for login and signup
 */

export async function authAction({ request }: { request: Request }) 
{
  if (request.method !== "POST") 
  {
    return new Response("Method not allowed", { status: 405 });
  }

  // Get submitted form data
  const formData = await request.formData();
  const email = formData.get("email") ?? "";
  const password = formData.get("password") ?? "";
  const isLogin = formData.get("isLogin") === "true";
  
  const port = process.env.NODEPORT;
  if (!port)
  {
    return { error: "Server configuration error: undefined port" };
  }

  const endpoint = isLogin ? "/api/login" : "/api/signup";
  const url = `http://localhost:${port}${endpoint}`;

  try
  {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) 
    {
        const error = await response.json();
        return { error: error.message || "Authentication failed" };
    }

    const { token } = await response.json();
    return { token, success: true };
  } 
  catch (err) 
  {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return { error: "Server error - " + errorMessage };
  }
}