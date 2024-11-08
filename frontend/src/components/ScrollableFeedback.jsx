import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feedbackData = [
  {
    name: "David Carter",
    cardDescription:
      " Affordable and decent quality, but the shipping was a bit slow. If delivery times improve, it would be perfect!",
    date: "March 12, 2024",
    socialName: "Instagram",
  },
  {
    name: "David Carter",
    cardDescription:
      " Affordable and decent quality, but the shipping was a bit slow. If delivery times improve, it would be perfect!",
    date: "March 12, 2024",
    socialName: "Facebook",
  },
  {
    name: "David Carter",
    cardDescription:
      " Affordable and decent quality, but the shipping was a bit slow. If delivery times improve, it would be perfect!",
    date: "March 12, 2024",
    socialName: "Instagram",
  },
  {
    name: "David Carter",
    cardDescription:
      " Affordable and decent quality, but the shipping was a bit slow. If delivery times improve, it would be perfect!",
    date: "March 12, 2024",
    socialName: "Facebook",
  },
];

const ScrollableFeedback = () => {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle className="font-[Roboto] font-semibold max-sm:text-lg leading-tight">
          Recent Feedback
        </CardTitle>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Sort by" />
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
        <ScrollArea className="h-[400px] rounded-md border p-4">
          {feedbackData.map((data, index) => (
            <Card key={index} className="m-2">
              <CardHeader className="flex items-center justify-between flex-row">
                <CardTitle className="max-md:text-lg">{data.name}</CardTitle>
                <div className="max-md:text-sm">{data.socialName}</div>
              </CardHeader>
              <CardDescription className="p-6">
                {data.cardDescription}
              </CardDescription>
              <CardFooter className="flex justify-end items-center text-right text-md">
                {data.date}
              </CardFooter>
            </Card>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ScrollableFeedback;
