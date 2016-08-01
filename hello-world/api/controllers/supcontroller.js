module.exports = {
  speak: speak
};

function speak(req, res) {
  var obj = {
    message: 'Not too much!'
  }
  res.json(obj);
}
