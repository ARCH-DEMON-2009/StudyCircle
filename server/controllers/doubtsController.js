const Doubt = require('../models/Doubt');

exports.askDoubt = async (req, res) => {
  const { question } = req.body;

  try {
    const doubt = new Doubt({ question });
    await doubt.save();
    res.status(201).json(doubt);
  } catch (error) {
    res.status(400).json({ error: 'Error submitting doubt' });
  }
};

exports.getDoubts = async (req, res) => {
  try {
    const doubts = await Doubt.find();
    res.status(200).json(doubts);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching doubts' });
  }
};
