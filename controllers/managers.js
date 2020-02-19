const Manager = require('../models/manager');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function login(req, res) {
  try {
    const manager = await Manager.findOne({credentials: req.body.credentials});
    if (!manager) return res.status(401).json({err: 'bad credentials'});
    manager.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(manager);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  const manager = new Manager(req.body);
  try {
    await manager.save();
    const token = createJWT(manager);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}


/*--- helper functions ---*/

function createJWT(manager) {
  return jwt.sign(
    {manager},
    SECRET,
    {expiresIn: '24h'}
  );
}