"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui";
import { UseReportQuery } from "@/domains/stores/query-hook/report/use-report";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DashboardPage = () => {
  const { data, isLoading, error } = UseReportQuery({
    options: {
      pageSize: 12,
      pageIndex: 1,
    },
  });

  if (isLoading) {
    return <div className="grid h-full place-content-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="grid h-full place-content-center">
        Error: {error.message}
      </div>
    );
  }

  if (data?.value === undefined) {
    return (
      <div className="grid h-full place-content-center">No data available</div>
    );
  }

  const cardData = [
    {
      title: "Income",
      value: data.value.systemTotalIncome,
      icon: DollarSign,
    },
    {
      title: "Transactions",
      value: data.value.systemTotalTransaction,
      icon: ShoppingCart,
    },
    {
      title: "Products",
      value: data.value.systemTotalProduct,
      icon: Package,
    },
    { title: "Users", value: data.value.systemTotalUser, icon: Users },
  ];

  const monthlyData = months.map((month, index) => {
    const matchingData = data.value.monthlyIncomeResponses.data.find(
      (item) => item.month === index + 1
    );
    return {
      month,
      income: matchingData?.totalIncome || 0,
      transactions: matchingData?.totalTransaction || 0,
    };
  });

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {card.value.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              income: {
                label: "Income",
                color: "hsl(var(--chart-1))",
              },
              transactions: {
                label: "Transactions",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-income)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-income)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="colorTransactions"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-transactions)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-transactions)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: "var(--foreground)" }} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  tick={{ fill: "var(--foreground)" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: "var(--foreground)" }}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={{ stroke: "var(--foreground)", strokeWidth: 1 }}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="income"
                  stroke="var(--color-income)"
                  fillOpacity={1}
                  fill="url(#colorIncome)"
                  name="Income"
                />
                <Area
                  yAxisId="right"
                  type="monotone"
                  dataKey="transactions"
                  stroke="var(--color-transactions)"
                  fillOpacity={1}
                  fill="url(#colorTransactions)"
                  name="Transactions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
