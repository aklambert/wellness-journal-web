
// Images
import wellnessJournalFullLogo from '../images/wellness-journal-full-logo.svg';
import wellnessJournalLogoLight from '../images/wellness-journal-logo-light.svg';

// Components
import ToggleSwitch from '../components/inputs/ToggleSwitch';
import Input from '~/components/inputs/Input';
import TextInput from '~/components/inputs/TextInput';
import PasswordInput from '~/components/inputs/PasswordInput';
import Link from '~/components/Link';
import Button from '~/components/Button';

// React
import { useState } from 'react';

/**
 * Page showing either the create account or login form, depending on 
 * toggle switch selection
 * 
 * @returns Page showing creat account form or login form
 */
export function CreateAccountOrLogin() 
{
  const [showLogin, setShowLogin] = useState(false);

  // Toggle between showing the 'Create Account' form and 'Login' form
  const handleShowLoginToggle = () => 
  {
    setShowLogin(!showLogin);
  }

  return (
    <main className="flex bg-purple-radial h-screen">

      {/* Begin grid template columns with 2 columns */}
      <div className="grid grid-flow-col grid-cols-2 w-full">

        {/* Column 1 */}
        <div className="flex flex-col items-center justify-center h-screen">
          <div className='flex justify-center m-8'>
            <img
              src={wellnessJournalLogoLight}
              alt="Wellness Journal light logo"
            />
          </div>

          <h1 className='text-white flex justify-center self-center m-8 font-bold'>{`${showLogin ? 'Welcome Back' : 'Welcome to Wellness Journal'}`}</h1>

          <div className=' bg-white m-8 rounded-tl-lg rounded-br-lg'>
            <p className='self-center p-8'>
              Create custom workouts with ease in a calm, mindful environment 
              that integrates fitness tracking and mental wellness
            </p>
          </div>
        </div> {/* End column 1 */}

        {/* Column 2 */}
        <div className="flex flex-col justify-center items-center bg-slight-transparent h-full">
          <div className='flex justify-center m-8'>
            <img
              src={wellnessJournalFullLogo}
              alt="Wellness Journal full logo"
            />
          </div> 
          <form className={`${showLogin} ? 'login' : 'create-account'`}>
            <ToggleSwitch onClick={handleShowLoginToggle} toggledOn={showLogin} className='m-8' option1='Create account' option2='Login'/>

            <h1>{showLogin? 'Login' : 'Create Account'}</h1>

            <TextInput label='email' type="email" placeholder='Enter your email' />
            <PasswordInput feedback={`${showLogin ? '' : 'Enter a password of at least 15 characters'}`} label="Password" placeholder={`${showLogin ? 'Enter' : 'Create'} your password`} />
            
            { showLogin ? 
              // Show extra login options, if this is a returning user logging in
              <div>
                <div className='flex relative'>
                  <Input type='checkbox' label='Remember me' className='password-option' /> 
                  <Link label='Forgot password?' className='absolute right-0 password-option' url='#' />
                </div>
                <Button type='submit' label='Login' version='primary'/>
              </div>
              
              // Or just show the 'Create account' button for new users
            : <Button type='submit' label='Create account' version='primary' />}

          </form>
      </div>
      </div>
    </main>
  );
}
