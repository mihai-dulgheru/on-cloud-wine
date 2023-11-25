import { WineBottles } from "@/data"

export default function handler(req, res) {
  const { pid } = req.query

  const wine = WineBottles.filter(wineBottle => wineBottle.id === pid);
  console.log(wine)

  return res.json(wine);
}
