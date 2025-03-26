/**
 * Show a Button component
 * 
 * @param label     The label for the button
 * @param type      The type of button (submit, button, etc.)
 * @param version   Version of button for styling (primary, secondary, etc.)
 * 
 * @returns Button component
 */
const Button = ({label, type, version}: {label: string, type: any, version: string}) => 
{
    return (
       <button className={`rounded-full cursor-pointer content-center px-4 h-12 mt-4 ${version}`} type={type}>{label}</button>
    );
};

export default Button;