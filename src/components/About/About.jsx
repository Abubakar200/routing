import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Routing In React
            </h2>
            <p className="mt-6 text-gray-600">
              In their speech at React Conf 2017, they explained this by showing
              how they projected their routing concepts seamlessly from Web to
              Native platforms, as well as integrating React Router into VR and
              creating animations in React Native. Though the drawing point from
              their talk revolved around how their Router API Is {"‘"}All About
              Components{"’"}.
            </p>
            <p className="mt-4 text-gray-600">
              In React, there is only a single ‘Html’ file involved. Whenever a
              user types in a new URL request, instead of fetching data from the
              server, the Router swaps in a different Component for each new URL
              request. The user is tricked into switching among multiple pages
              but in reality, each separate Component re-renders achieving
              multiple views as per our needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
