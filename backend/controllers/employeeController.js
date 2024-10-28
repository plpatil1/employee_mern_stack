const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json(employee);
};

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

exports.updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
};

exports.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
};
