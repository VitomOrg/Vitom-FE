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
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
      title: "Total Income",
      value: data.value.systemTotalIncome,
      icon: DollarSign,
    },
    {
      title: "Total Transactions",
      value: data.value.systemTotalTransaction,
      icon: ShoppingCart,
    },
    {
      title: "Total Products",
      value: data.value.systemTotalProduct,
      icon: Package,
    },
    { title: "Total Users", value: data.value.systemTotalUser, icon: Users },
  ];

  const monthlyIncomeData = data.value.monthlyIncomeResponses.data.map(
    (item) => ({
      month: `${item.year}-${item.month.toString().padStart(2, "0")}`,
      income: item.TotalIncome,
      transactions: item.TotalTransaction,
    })
  );

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
          <CardTitle>Monthly Income</CardTitle>
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
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyIncomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  stroke="var(--color-income)"
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="var(--color-transactions)"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  yAxisId="left"
                  dataKey="income"
                  fill="var(--color-income)"
                  name="Income"
                />
                <Bar
                  yAxisId="right"
                  dataKey="transactions"
                  fill="var(--color-transactions)"
                  name="Transactions"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
