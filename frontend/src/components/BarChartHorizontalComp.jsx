import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "A mixed bar chart";

// Updated chart data with social media names
const chartData = [
  { platform: "Instagram", visitors: 275, fill: "#1476B5" },
  { platform: "G2", visitors: 200, fill: "#FF8548" },
  { platform: "Facebook", visitors: 187, fill: "#1476B5" },
  { platform: "Yelp", visitors: 173, fill: "#FF8548" },
  { platform: "Capterra", visitors: 90, fill: "#1476B5" },
];

// Calculate total visitors for percentage calculation
const totalVisitors = chartData.reduce((sum, data) => sum + data.visitors, 0);

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Instagram: {
    label: "Instagram",
    color: "hsl(var(--chart-1))",
  },
  G2: {
    label: "G2",
    color: "hsl(var(--chart-2))",
  },
  Facebook: {
    label: "Facebook",
    color: "hsl(var(--chart-3))",
  },
  Yelp: {
    label: "Yelp",
    color: "hsl(var(--chart-4))",
  },
  Capterra: {
    label: "Capterra",
    color: "hsl(var(--chart-5))",
  },
};

export default function BarChartHorizontalComp() {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle className="font-[Roboto] font-semibold max-sm:text-lg leading-tight">
          Customer Feedback Volume
        </CardTitle>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Week 1">Week 1</SelectItem>
              <SelectItem value="Week 2">Week 2</SelectItem>
              <SelectItem value="Week 3">Week 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <YAxis
              dataKey="platform"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value]?.label}
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={10} barSize={30}>
              <LabelList
                dataKey="visitors"
                position="insideRight"
                formatter={(value) =>
                  `${((value / totalVisitors) * 100).toFixed()}%`
                }
                style={{ fill: "#fff", fontSize: "16px", marginRight: "10px" }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
