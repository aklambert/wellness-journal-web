// Icons
import { IconEyeClosed } from "@tabler/icons-react"; 
import { IconEye } from "@tabler/icons-react";
import { IconLock } from "@tabler/icons-react"; 

// React
import { useState, useEffect } from "react";

/**
 * Show a password input component
 * 
 * @param label         The label for the password input
 * @param placeholder   The placeholder text for the password input
 * @param feedback      A string giving instructions or feedback for the password input
 * 
 * @returns PasswordInput component
 */
const PasswordInput = ({label, placeholder, feedback}: {label: string, placeholder: string, feedback: string}) => 
{
    const [showPassword, setShowPassword] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);

    // Toggle show/hide password icon
    const handleShowPassword = () => 
    {
        setShowPassword(!showPassword);
    }

    // Toggle between showing or hiding caps lock on icon
    const handleCapsLockKeyPress = (event: KeyboardEvent) => 
    {
        setCapsLockOn(event.getModifierState("CapsLock")); 
    }

    // Listen for when the caps lock key is pressed, to show the lock icon when caps lock is on
    useEffect(() =>
    {
        window.addEventListener('keydown', handleCapsLockKeyPress);

        // Remove the event listener once it's no longer necessary
        return () =>
        {
            window.removeEventListener('keydown', handleCapsLockKeyPress);
        }

    }, []);   
    
    return (
       <div className="w-xs">
            <label className="flex flex-col text-secondary">
                {label}
                <div className="mt-2 flex textbox items-center rounded select-none relative bg-white">
                    <input type={`${showPassword? 'text' : 'password'}`} placeholder={placeholder} className="p-4 w-sm me-10 rounded text-black h-12 password" name={label.toLowerCase().replace(' ', '-')} />
                    {capsLockOn ? <IconLock className="password-capslock"/> : ''}
                    {showPassword ? <IconEye className="password-eye eye-open" onClick={handleShowPassword}/> : <IconEyeClosed onClick={handleShowPassword} className="password-eye eye-closed" />}
                </div>
            </label>
            <div className="input-feedback mt-2 text-545454">{feedback}</div>
       </div>
    );
};

export default PasswordInput;