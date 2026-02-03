/**
 * Show an input component that has a textbox
 * 
 * @param label         The label for the text input
 * @param placeholder   The placeholder text for the text input
 * @param type          The type of text-related input (text, email, etc.)
 * 
 * @returns TextInput component
 */
const TextInput = ({label, placeholder, type}: {label?: string, placeholder?: string, type: string}) => 
{

    // Determine autocomplete attribute based on input type
    const autoComplete = () =>
    {
        switch(type)
        {
            case 'email':
                return 'email';
            default:
                return 'off';
        }
    }

    return (
       <div className="mb-4 w-xs">
            <label className="flex flex-col text-secondary">
                {label}
                <div className="mt-2 flex items-center textbox rounded bg-white">
                    <input autoComplete={autoComplete()} type={type} placeholder={placeholder} className="p-4 w-sm rounded text-black h-12" name={label?.toLowerCase().replace(' ', '-')} />
                </div>
            </label>
       </div>
    );
};

export default TextInput;