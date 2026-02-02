import type { Route } from "./+types/home";
import { CreateAccountOrLogin } from "~/views/CreateAccountOrLogin";

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

export default function Home() 
{
  return <CreateAccountOrLogin />;
}
