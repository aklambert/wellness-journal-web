import 
{
    type RouteConfig, 
    index,
    route, 
} from "@react-router/dev/routes";

export default 
[
    // index page
    index("routes/home.tsx"),

    // Create account/ login/ user auth pages
    //route("create-account", "views/CreateAccount.tsx")

] satisfies RouteConfig;
