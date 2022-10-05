import { hotelData } from "../../Hoteldata/data";

export default function handler(req, res) {
  res.status(200).json(hotelData);
}
