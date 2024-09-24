import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for
              community <br className="hidden lg:block" /> components using{" "}
              <span className="font-semibold underline decoration-primary">
                Tailwind CSS
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to{" "}
              <br className="hidden lg:block" /> bootstrap your new apps,
              projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form
                action="https://www.creative-tim.com/twcomponents/search"
                className="flex flex-wrap justify-between md:flex-row"
              ></form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>
        <section className="container px-4 py-16 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
            {/*  Basic Plan  */}
            <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Basic
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For individuals just getting started
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  $10
                </span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                  /month
                </span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    <s>10GB Storage </s>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Basic Support
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Single User
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    <s>Community Updates</s>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    <s>Weekly Updates</s>
                  </span>
                </li>
              </ul>

              <Button
                className="mx-1 dark:border-black-100 my-8 dark:bg-black"
                variant="outline"
              >
                Choose Plan
              </Button>
            </div>
            {/* Pro Plan  */}
            <div className="w-full max-w-sm p-6 bg-white border border-purple-500 rounded-lg shadow-lg dark:bg-gray-800 dark:border-purple-500 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Standard
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For professionals who need more features
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  $20
                </span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                  /month
                </span>
              </div>
              <span className="inline-block p-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                Bestseller
              </span>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    50GB Storage
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Priority Support
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Up to 5 Users
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Community Access
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Daily Updates
                  </span>
                </li>
              </ul>
              <Button
                className="mx-1 dark:border-black-100 my-[2.9] dark:bg-black text-white"
                variant="outline"
              >
                Choose Plan
              </Button>
            </div>
            {/* <!-- Enterprise Plan  */}
            <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Premium
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For large organizations with advanced needs
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  $30
                </span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                  /month
                </span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    200GB Storage
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    24/7 Support
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Unlimited Users
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Community Access
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Real-time Updates
                  </span>
                </li>
              </ul>
              <Button
                className="mx-1 dark:border-black-100 my-8 dark:bg-black"
                variant="outline"
              >
                Choose Plan
              </Button>
            </div>
          </div>
        </section>

        <section class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl animate-fadeIn">
              Welcome to Our Service
            </h2>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-300 animate-fadeIn">
              We provide the best solutions for your needs
            </p>
          </div>
          <div class="flex flex-wrap justify-center mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
            <div class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-fadeIn">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Email Subscription
              </h3>
              <p class="mt-4 text-gray-500 dark:text-gray-300">
              Implement an email subscription form where readers can sign up to receive notifications about new blog posts. This feature helps build a loyal audience by keeping readers informed about the latest content and encouraging repeat visits to your blog.These features can further enhance the functionality and user engagement of your blog page, making it more appealing and interactive for your audience.
              </p>
            </div>
            <div class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-fadeIn">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Related Posts
              </h3>
              <p class="mt-4 text-gray-500 dark:text-gray-300">
              Display a section of related posts at the end of each blog post. This feature keeps readers engaged by suggesting other articles they might be interested in, based on the content they just read. It can help increase the time users spend on your site and reduce bounce rates.
              </p>
            </div>
            <div class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 animate-fadeIn">
              <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Social Media Sharing
              </h3>
              <p class="mt-4 text-gray-500 dark:text-gray-300">
              Add social media sharing buttons to each blog post, allowing readers to easily share content on platforms like Facebook , Twitter , LinkedIn , etc. This feature can help increase the visibility of your blog and attract more readers through social media channels.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fadeIn">
              Featured Blogs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 animate-fadeIn">
              Check out the latest updates and trends in the web development
              world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Blog 1 */}
            <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn">
              <img
                src="/typescript.webp"
                alt="Blog 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Blog 1
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore insights on building scalable web apps.
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn delay-100">
              <img
                src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Blog 2
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn best practices for responsive web design.
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn delay-200">
              <img
                src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Blog 3
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover how to optimize web performance effectively.
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
