import UserForm from "@/components/UserForm";

const Home = () => {
  return (
    <div className="bg-white p-8 rounded-2xl mx-auto lg:w-[700px] md:w-[600px]">
      <div className="flex flex-col space-y-6">
        <span className="text-3xl font-karla font-bold text-complementary">
          Contact Form
        </span>
        <UserForm />
      </div>
    </div>
  );
};

export default Home;
