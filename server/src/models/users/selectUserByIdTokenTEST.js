
const jwt = require('jsonwebtoken');
const { getUserById } = require('./src/controllers/users'); // Replace with your actual user retrieval function


const { userId, token } = req.query;
// Verify the token
const secretKey = 'your-secret-key'; // Replace with your actual secret key
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        res.status(401).json({ message: 'Token is not valid' });
    } else {
        // Token is valid; you can access the user ID
        const { id } = decoded;

        // Check if the user ID from the token matches the one in the query
        if (id === userId) {
            // Retrieve the user's profile using the user ID
            const user = getUserById(id); // Replace with your actual user retrieval function

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } else {
            res.status(403).json({ message: 'User ID in token does not match query' });
        }
    }
});