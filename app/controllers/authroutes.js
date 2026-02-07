const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * Handle user login - validate credentials and return JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function login(req, res) {
  const { email, password } = req.body;

    return res.status(501).json({ message: 'Login not implemented yet' });

//   // TODO: Query database for user with this email
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password required' });
//   }

//   try {
//     // TODO: Fetch user from database
//     // const user = await User.findOne({ email });
//     // if (!user) return res.status(401).json({ message: 'Invalid credentials' });
//     // const passwordMatch = await bcrypt.compare(password, user.passwordHash);
//     // if (!passwordMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     // Create JWT token (replace 'your-secret-key' with env variable)
//     const token = jwt.sign(
//       { email, userId: 'placeholder' },
//       process.env.JWT_SECRET || 'your-secret-key',
//       { expiresIn: '24h' }
//     );

//     res.json({ token, message: 'Login successful' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
}

/**
 * Handle user signup - create new account and return JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function signup(req, res) {

    return res.status(501).json({ message: 'Signup not implemented yet' });
//   const { email, password } = req.body;

//   if (!email || !password || password.length < 15) {
//     return res.status(400).json({ message: 'Valid email and password (min 15 chars) required' });
//   }

//   try {
//     // TODO: Check if user already exists
//     // const existingUser = await User.findOne({ email });
//     // if (existingUser) return res.status(409).json({ message: 'Email already in use' });

//     // Hash password and create user
//     // const hashedPassword = await bcrypt.hash(password, 10);
//     // const user = await User.create({ email, passwordHash: hashedPassword });

//     const token = jwt.sign(
//       { email, userId: 'placeholder' },
//       process.env.JWT_SECRET || 'your-secret-key',
//       { expiresIn: '24h' }
//     );

//     res.status(201).json({ token, message: 'Account created successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
}

module.exports = {
  login,
  signup
};