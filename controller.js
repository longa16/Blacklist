const Blacklist = require('model');

exports.add_Blacklist = async (req, res) => {
  const { From, Message } = req.body;
  if (Message.includes('STOP')) {
    try {
      const newEntry = new Blacklist({ Number: From });
      await newEntry.save();
      res.status(200).json({ message: 'Number add to blacklist' });
    } catch (err) {
      res.status(500).json({ message: 'server error' });
    }
  } else {
    res.status(400).json({ message: 'The message does not contain STOP' });
  }
};


exports.get_Blacklist = async (req, res) => {
  try {
    const blacklist = await Blacklist.find();
    res.status(200).json(blacklist);
  } catch (err) {
    res.status(500).json({ message: 'server error' });
  }
};


exports.is_Blacklisted = async (req, res) => {
  const { Number } = req.params;
  try {
    const blacklisted = await Blacklist.findOne({ Number });
    if (blacklisted) {
      res.status(200).json({ message: 'Blacklisted number' });
    } else {
      res.status(200).json({ message: 'non-blacklisted number' });
    }
  } catch (err) {
    res.status(500).json({ message: 'server error' });
  }
};
