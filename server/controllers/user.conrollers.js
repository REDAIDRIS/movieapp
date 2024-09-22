import User from "../Models/user.model.js";


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email });
    
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user if they don't exist
    const user = new User({
         name,
         email,
         Password:password ,
    });
    await user.save();
    
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//export const login =()