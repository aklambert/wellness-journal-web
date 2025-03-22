/**
 * Show a toggle switch component, with text inside the toggles
 * 
 * @param className     ClassName attributes to add to the toggle switch
 * @param option1       The text to show for the left toggle switch option
 * @param option2       The text to show for the right toggle switch option
 * @param onClick       A function containing actions the toggle switch should handle when it's clicked
 * 
 * @returns ToggleSwitch component
 */
const ToggleSwitch = ({className, option1, option2, toggledOn, onClick}: {className?: string, option1: string, option2: string, onClick?: any, toggledOn: boolean}) => 
{
    return (
        <div onClick={onClick} className={`${className} select-none flex items-center content-center rounded-full bg-white h-12 w-fit cursor-pointer`}>
            <div className={`rounded-full content-center h-12 p-2 ${toggledOn ? 'bg-white text-secondary' : 'bg-secondary text-white'}`}>{option1}</div>
            <div className={`rounded-full content-center h-12 p-2 ${toggledOn ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}>{option2}</div>
        </div>
    );
};

export default ToggleSwitch;