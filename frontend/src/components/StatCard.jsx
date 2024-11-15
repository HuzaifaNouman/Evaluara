import { Card, CardContent } from "@/components/ui/card";
import newPage from "@/assets/newPage.svg";

export default function StatCard({ data }) {
  const { value, title, icon } = data;
  return (
    <Card className="dark:bg-dark-cardBg dark:text-dark-text rounded-2xl w-full">
      <CardContent className="pt-6">
        <div className="flex items-center">
          <div className="w-full flex justify-between gap-4">
            <div className="rounded-lg bg-blue-50 dark:bg-[#292C3B] p-2">
              <img src={icon} alt={title} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-normal font-[Roboto] text-neutral-darkGray dark:text-dark-text max-sm:text-[13px]">
                {title}
              </p>
              <div className="flex justify-center items-center gap-2">
                <h2 className="font-[Roboto] text-5xl font-semibold tracking-tight text-primary dark:text-dark-text max-sm:text-4xl">
                  {value}
                </h2>
              </div>
            </div>
            <button className="rounded-full p-6 hover:bg-secondary">
              <img
                className="dark:filter dark:invert"
                src={newPage}
                alt="Refresh data"
              />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
