import type { Route } from "./+types/home";
import { CreateAccountOrLogin } from "~/views/CreateAccountOrLogin";
import { authAction } from "~/actions/authActions.js";

export function meta({}: Route.MetaArgs) 
{
  return [
    { 
      title: "Wellness Journal",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    { name: "description", content: "Welcome to Wellness Journal!" },
  ];
}

// ====== Actions ======
// Handle login/create account form submission
export { authAction as action };

export default function Home() 
{
  return <CreateAccountOrLogin />;
}
