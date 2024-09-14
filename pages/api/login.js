/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
	const { email, password } = req.body;

	// Dummy authentication logic (you'd replace this with actual logic)
	if (email === 'admin@example.com' && password === 'password123') {
		return res.status(200).json({
			user: { email },
			token: 'secureTokenHere',
		});
	} else {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
};
