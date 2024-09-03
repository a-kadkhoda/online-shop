const About = () => {
  return (
    <>
      <section className="container flex justify-center items-center min-h-[93.9vh] font-iranSansX-R">
        <div className="flex flex-col justify-center items-center w-[50%] bg-slate-800 p-5 rounded-md">
          <h1 className="font-iranSansx-B text-xl text-white my-8">
            وب سرویس Fake Store API
          </h1>
          <p className="text-justify bg-white p-5 rounded-md">
            خوش آمدید! این پروژه با استفاده از وب سرویس Fake Store API توسعه
            یافته است تا یک نمونه فروشگاه آنلاین را شبیه‌سازی کند. هدف از این
            پروژه، آشنایی با نحوه استفاده از APIها برای مدیریت داده‌های محصولات،
            دسته‌بندی‌ها و سفارشات در یک فروشگاه مجازی است.
            <strong className="text-lg">لطفاً به تب محصولات بروید</strong> تا لیست کاملی از محصولات
            موجود را مشاهده کنید و با ویژگی‌ها و امکانات این وب سرویس بیشتر آشنا
            شوید. از همکاری شما سپاسگزاریم و امیدواریم تجربه‌ای لذت‌بخش در این
            پروژه داشته باشید.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
