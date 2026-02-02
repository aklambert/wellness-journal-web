
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
    <main className="bg-purple-radial h-screen">

      {/* Begin grid template columns with 2 columns */}
      <div className="bg-purple-radial grid grid-flow-row md!:grid-flow-col md:grid-cols-2">

        {/* Column 1 */}
        <div className="flex flex-col items-center pt-9 pb-4 md:justify-center md:h-screen">
          <div className='flex justify-center md:m-8'>
            <img
              className='w-16 md:w-40'
              src={wellnessJournalLogoLight}
              alt="Wellness Journal light logo"
            />
          </div>

          <h1 className='text-white flex justify-center self-center text-center mt-4 md:m-8 font-bold'>{`${showLogin ? 'Welcome Back' : 'Welcome to Wellness Journal'}`}</h1>

          <div className=' bg-white mx-8 my-4 md:m-8 rounded-tl-lg rounded-br-lg'>
            <p className='self-center p-4 md:p-8'>
              Create custom workouts with ease in a calm, mindful environment 
              that integrates fitness tracking and mental wellness
            </p>
          </div>
        </div> {/* End column 1 */}

        {/* Column 2 */}
        <div className="flex flex-col md:justify-center items-center bg-slight-transparent">
          <Form method="post" className={` ${showLogin ? 'login' : 'create-account'}`}>
            <div className='flex w-full'>
              <img
                className='hidden md:block'
                src={wellnessJournalFullLogo}
                alt="Wellness Journal full logo"
              />
            </div> 

            <ToggleSwitch onClick={handleShowLoginToggle} toggledOn={showLogin} className='my-8' option1='Create account' option2='Login'/>

            <h1>{showLogin? 'Login' : 'Create Account'}</h1>

            <TextInput label='email' type="email" placeholder='Enter your email' />
            <PasswordInput feedback={`${showLogin ? '' : 'Enter a password of at least 15 characters'}`} label="Password" placeholder={`${showLogin ? 'Enter' : 'Create'} your password`} />
            
            {/* Hidden input to track login vs signup */}
            <input type='hidden' name='isLogin' value={showLogin ? 'true' : 'false'} />
            
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

          </Form>
      </div>
      </div>
    </main>
  );
}
