import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "A multiple bar chart";

const chartData = [
  { date: "Mar 12", value: 0, instagram: 186, facebook: 80 },
  { date: "Mar 13", value: 1000, instagram: 305, facebook: 200 },
  { date: "Mar 14", value: 2000, instagram: 237, facebook: 120 },
  { date: "Mar 15", value: 3000, instagram: 73, facebook: 190 },
  { date: "Mar 16", value: 4000, instagram: 209, facebook: 130 },
  { date: "Mar 17", value: 5000, instagram: 214, facebook: 140 },
  { date: "Mar 18", value: 6000, instagram: 200, facebook: 85 },
];

const chartConfig = {
  instagram: {
    label: "Instagram",
    color: "#1476B5", // Instagram color
  },
  facebook: {
    label: "Facebook",
    color: "#FF8548", // Facebook color
  },
};

export default function BarChartComp() {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle className="font-[Roboto] font-semibold max-sm:text-lg leading-tight">
          Customer Feedback Volume
        </CardTitle>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue
              className="font-[Roboto] font-light"
              placeholder="Week"
            />
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
            width={400}
            height={200}
            data={chartData}
            barSize={40}
            barCategoryGap="20%"
          >
            <CartesianGrid
              stroke="#89CAF0" // color of the grid lines
              strokeWidth={1} // thickness of the grid lines
              strokeDasharray="13 10" // make it dashed
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={1}
              tickFormatter={(value) => `${value}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="instagram"
              fill={chartConfig.instagram.color}
              radius={10}
            >
              <LabelList
                dataKey="instagram"
                position="top" // Position the label on top of the bar
                fill="#fff" // Set the label color
              />
            </Bar>
            <Bar
              dataKey="facebook"
              fill={chartConfig.facebook.color}
              radius={10}
            >
              <LabelList
                dataKey="facebook"
                position="top" // Position the label on top of the bar
                fill="#fff" // Set the label color
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
