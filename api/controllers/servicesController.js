const feesGenerator = (req, res) => {
  try {
      res.json("feesGenerator")
  } catch (error) {
    res.status(500).json(error);
  }
};

const feesComputation = (req, res) => {
    res.json("feesComputation")
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {feesGenerator, feesComputation}