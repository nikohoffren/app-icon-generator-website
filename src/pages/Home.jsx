/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import '../index.css';
import FileUpload from '../components/FileUpload';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-800 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center text-center font-semibold text-4xl text-gray-100">
              <h1 className="mb-4">App Icon Generator</h1>
              <img
                src="icon_512x512.png"
                alt="App Icon Generator logo"
                className="mx-auto h-24 w-24 rounded-full"
              />
            </div>
            <div className="flex justify-center mt-6 text-gray-100">
              <FileUpload />
            </div>
            <div className="text-center mt-10 text-lg font-bold text-gray-100">
              Welcome to the App Icon Generator!
            </div>
            <div className="text-center mt-5 font-semibold text-gray-100">
              Are you tired of manually creating and resizing your
              app icons? Say hello to our App Icon Generator, a
              one-stop solution for generating perfect icons for
              your applications. This tool lets you upload an
              image, and it will automatically create a set of
              circular icons in all the required sizes for
              Android. No longer do you need to worry about the
              tedious task of resizing and cropping. Our generator
              handles all the technical details, allowing you to
              focus on the creative process. With a few clicks,
              you can generate the perfect icons to make your app
              stand out on any device. Start creating your app
              icons today and experience the streamlined
              convenience!
            </div>
            <div className="mt-5">
              <p className="font-semibold text-lg text-gray-100">
                Features
              </p>
              <ul className="mt-3 text-md text-gray-100 list-disc list-inside">
                <li>
                  Rapid Icon Generation: Just upload your base
                  image and let our generator instantly
                  produce a set of properly-sized, circular
                  app icons for Android.
                </li>
                <li>
                  Support for All Android Sizes: Our generator
                  creates icons that comply with Android's
                  standard sizes, eliminating the guesswork
                  and manual resizing.
                </li>
                <li>
                  Downloadable Zip File: After processing,
                  download a single zip file containing your
                  new app icons in all the necessary sizes.
                </li>
                <li>
                  Preview Before Download: Get a sneak peek at
                  your icons in a variety of sizes before
                  downloading, ensuring your app's look is
                  just right.
                </li>
                <li>
                  Effortless Workflow Integration: Spend less
                  time wrestling with image editing tools and
                  more time designing and coding your app.
                </li>
                <li>
                  Simplified User Interface: Our clean,
                  straightforward UI allows you to generate
                  app icons in seconds, even if you're not
                  tech-savvy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
