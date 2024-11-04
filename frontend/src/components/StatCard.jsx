import { Card, CardContent } from "@/components/ui/card";
import newPage from "@/assets/newPage.svg";

export default function StatCard({ data }) {
  return (
    <Card className="w-full rounded-2xl">
      <CardContent className="pt-6">
        <div className="flex items-center">
          <div className="w-full flex justify-between gap-4">
            <div className="rounded-lg bg-blue-50 p-2">
              <img src={data.icon} alt={data.title} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-normal">{data.title}</p>
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-5xl font-semibold tracking-tight text-primary">
                  {data.value}
                </h2>
              </div>
            </div>
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <img src={newPage} alt="Refresh data" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
