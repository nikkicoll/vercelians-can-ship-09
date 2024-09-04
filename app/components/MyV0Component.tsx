import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  { day: "Monday", time: "7:30 AM", emoji: "🌅" },
  { day: "Tuesday", time: "6:00 PM", emoji: "🌆" },
  { day: "Wednesday", time: "12:00 PM", emoji: "☀️" },
  { day: "Thursday", time: "8:00 AM", emoji: "🌄" },
  { day: "Friday", time: "5:30 PM", emoji: "🌇" },
  { day: "Saturday", time: "10:00 AM", emoji: "🏞️" },
  { day: "Sunday", time: "3:00 PM", emoji: "🌳" },
]

export default function DogWalkingSchedule() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Woof-tastic Walking Schedule 🐾
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {schedule.map((item, index) => (
            <li
              key={item.day}
              className={`flex justify-between items-center p-2 rounded-lg ${
                index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
              }`}
            >
              <span className="font-medium">{item.day}</span>
              <span className="flex items-center">
                {item.time} {item.emoji}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
