/**
 * Validate the password to ensure it meets the required criteria.
 * 
 * @param {string} password 
 * @returns true if the password is valid, false otherwise
 */
function validateStrongPassword(password: string): { valid: boolean; message?: string }
{
    const minLength = 15;

    if (password.length < minLength)
    {
        return { valid: false, message: `Password must be at least ${minLength} characters long.` };
    }

    return { valid: true };
}

export { validateStrongPassword };