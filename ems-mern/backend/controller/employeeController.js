const Employee = require("../model/employeeSchema");

const addEmployee = async (req, res) => {
  const { name, email, mobile, gender, course, designation } = req.body;

  try {
    const cover = req.file.filename;
    const fullUrl = `http://localhost:5000/uploads/${cover}`;
    const user = await Employee.create({
      name,
      image: fullUrl,
      email,
      mobile,
      user: req.user._id,
      gender,
      course,
      designation,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "something went wrong employee not created",
    });
  }
};

module.exports = {
  addEmployee,
};
