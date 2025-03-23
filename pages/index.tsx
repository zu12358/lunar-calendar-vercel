import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [today, setToday] = useState(new Date());
  const [lunarDate, setLunarDate] = useState("");
  const [canChi, setCanChi] = useState({ day: "", month: "", year: "" });
  const [goodBad, setGoodBad] = useState({ zodiac: "", shouldDo: [], avoidDo: [] });

  useEffect(() => {
    // Giả lập dữ liệu (sau này sẽ thay bằng API hoặc thư viện xử lý âm lịch)
    setLunarDate("13 tháng 2 năm Giáp Thìn");
    setCanChi({ day: "Quý Mão", month: "Ất Mão", year: "Giáp Thìn" });
    setGoodBad({
      zodiac: "Hoàng đạo",
      shouldDo: ["Cưới hỏi", "Mở hàng", "Xuất hành"],
      avoidDo: ["Động thổ", "Chôn cất"]
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-4 flex items-center justify-center">
      <Card className="max-w-md w-full shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center">Lịch Âm - Dương</h1>

          <div className="text-center">
            <p className="text-xl font-semibold">{today.toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
            <p className="text-lg text-gray-600">Âm lịch: {lunarDate}</p>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold">Can chi:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ngày: {canChi.day}</li>
              <li>Tháng: {canChi.month}</li>
              <li>Năm: {canChi.year}</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold">{goodBad.zodiac}</h2>
            <p className="font-medium text-green-600">Nên làm:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {goodBad.shouldDo.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p className="font-medium text-red-600 mt-2">Tránh làm:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {goodBad.avoidDo.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}