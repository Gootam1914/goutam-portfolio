import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <p className="text-blue-400 mb-3">Hi, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Goutam Kanakadandi
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Computer Science • Machine Learning • Software Engineering
          </p>
        </div>
      </div>
    </main>
  );
}