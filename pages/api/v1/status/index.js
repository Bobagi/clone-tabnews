function status(req, res) {
  res.status(200).send({ key: "OK" });
}

export default status;
