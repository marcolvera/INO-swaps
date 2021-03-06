const Shift = require('../models/shift');

module.exports = {
    index,
    show,
    create,
    delete: deleteShift, 
    update
};


async function index(req, res) {
    const shifts = await Shift.find({});
    res.status(201).json(shifts);
}


async function show(req, res) {
    const shift = await Shift.findById(req.params.id);
    res.status(201).json(shift);
}


async function create(req ,res) {
    const shift = await Shift.create(req.body); 
    res.status(201).json(shift);
}


async function deleteShift(req, res) {
    const shift = await Shift.findByIdAndDelete(req.params.id);
    res.status(201).json(shift);
}


async function update(req, res) {
    const updatedShift = await Shift.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedShift);
  }
