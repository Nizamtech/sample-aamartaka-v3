export default function handler(req, res) {
  console.log(req);
console.log("clickednn");
  res.status(200).json({ data: req.body });
}
