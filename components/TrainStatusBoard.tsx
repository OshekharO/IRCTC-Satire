'use client';

export interface TrainData {
  number: string;
  name: string;
  scheduled: string;
  currentStatus: string;
  delay: string;
  reason: string;
}

const defaultTrains: TrainData[] = [
  {
    number: "12301",
    name: "Howrah Rajdhani",
    scheduled: "16:55",
    currentStatus: "Platform 7 (Probably)",
    delay: "3h 47m",
    reason: "Technical Reasons",
  },
  {
    number: "12259",
    name: "Sealdah Duronto",
    scheduled: "11:30",
    currentStatus: "Running Backwards",
    delay: "6h 12m",
    reason: "Fog (in June)",
  },
  {
    number: "12951",
    name: "Mumbai Rajdhani",
    scheduled: "17:00",
    currentStatus: "Found near Bhopal",
    delay: "2h 55m",
    reason: "VIP Special Movement",
  },
  {
    number: "22691",
    name: "Rajdhani Express",
    scheduled: "20:15",
    currentStatus: "On Different Route",
    delay: "8h 30m",
    reason: "Cow on Tracks",
  },
  {
    number: "12002",
    name: "Shatabdi Express",
    scheduled: "06:00",
    currentStatus: "Driver Had Chai",
    delay: "1h 15m",
    reason: "Operational Reasons",
  },
  {
    number: "19301",
    name: "Indore-Mumbai Exp",
    scheduled: "23:45",
    currentStatus: "Missing",
    delay: "11h 00m",
    reason: "Under Investigation",
  },
  {
    number: "12621",
    name: "Tamil Nadu Exp",
    scheduled: "22:30",
    currentStatus: "Three Stations Back",
    delay: "4h 45m",
    reason: '"Reasons"',
  },
  {
    number: "12627",
    name: "Karnataka Exp",
    scheduled: "07:15",
    currentStatus: "Reconsidering Route",
    delay: "5h 20m",
    reason: "Divine Intervention",
  },
];

interface TrainStatusBoardProps {
  trains?: TrainData[];
}

export default function TrainStatusBoard({ trains = defaultTrains }: TrainStatusBoardProps) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full bg-white text-sm">
        <thead>
          <tr className="bg-primary text-white text-left text-xs uppercase tracking-wider">
            <th className="px-4 py-3 font-semibold">Train No.</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Scheduled</th>
            <th className="px-4 py-3 font-semibold">Current Status</th>
            <th className="px-4 py-3 font-semibold">Delay</th>
            <th className="px-4 py-3 font-semibold">Reason</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 table-stripe">
          {trains.map((train) => (
            <tr key={train.number} className="hover:bg-red-50 transition-colors">
              <td className="px-4 py-3 font-mono font-bold text-primary">
                {train.number}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {train.name}
              </td>
              <td className="px-4 py-3 text-gray-600 font-mono">
                {train.scheduled}
              </td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-1 text-orange-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500 status-blink inline-block" />
                  {train.currentStatus}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="delay-badge">{train.delay}</span>
              </td>
              <td className="px-4 py-3 text-gray-500 italic text-xs">
                &ldquo;{train.reason}&rdquo;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
