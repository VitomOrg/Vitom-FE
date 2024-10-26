import { Card, Label, Skeleton } from "@/components/ui";

const Introduction = () => {
  return (
    <div className="space-y-16">
      {/* Hero Introduction Section */}
      <section className="flex flex-col gap-8 p-8 md:flex-row">
        {/* Left side: Content section */}
        <article className="space-y-4 md:w-1/2">
          <Label className="text-lg">Giới thiệu</Label>
          <h1 className="text-3xl font-bold text-primary">Về Vitom</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Vitom là nền tảng hàng đầu tại Việt Nam chuyên cung cấp mô hình 3D
            chất lượng cao với giá thành phù hợp cho thị trường Việt Nam. Chúng
            tôi hiểu rằng việc tạo mô hình 3D từ đầu có thể tốn nhiều thời gian
            và đòi hỏi kỹ năng chuyên môn cao. Đó là lý do Vitom ra đời - để
            giúp bạn tiết kiệm thời gian và chi phí trong quá trình sáng tạo.
          </p>
        </article>

        {/* Right side: Image section */}
        <aside className="md:w-1/2">
          <Card className="flex items-center justify-center transition-shadow duration-300 ease-in-out border border-dashed h-96 border-primary bg-muted hover:shadow-lg">
            <Skeleton className="w-1/2 h-3/4 animate-pulse" />
          </Card>
        </aside>
      </section>

      {/* Features Section */}
      <section className="px-8">
        <h2 className="mb-8 text-2xl font-bold text-primary">
          Điều Gì Làm Vitom Khác Biệt?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-8 pb-8">
        <p className="text-center text-lg text-muted-foreground">
          Cho dù bạn là nhà phát triển game, nghệ sĩ 3D, hay người mới bắt đầu,
          Vitom là người đồng hành đáng tin cậy trên hành trình sáng tạo của
          bạn.
        </p>
      </section>
    </div>
  );
};

// Features data
const features = [
  {
    title: "Đa dạng mô hình",
    description:
      "Từ nhân vật game, phương tiện giao thông đến đồ vật sinh hoạt - thư viện của chúng tôi đáp ứng mọi nhu cầu sáng tạo của bạn",
  },
  {
    title: "Dễ dàng sử dụng",
    description:
      "Tất cả mô hình đều tương thích với các phần mềm phổ biến như Blender, Maya và nhiều phần mềm khác",
  },
  {
    title: "Giá cả hợp lý",
    description:
      "Chúng tôi cung cấp mô hình 3D chất lượng cao với mức giá phù hợp với người dùng Việt Nam",
  },
  {
    title: "Hỗ trợ tận tâm",
    description:
      "Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn trong quá trình tải và sử dụng mô hình",
  },
];

export default Introduction;
