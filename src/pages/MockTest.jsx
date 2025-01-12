import React from 'react'
import { AiOutlineDownSquare } from "react-icons/ai";
const MockTest = () => {
  return (
    <div>
      <main className="m-5 ml-20 mr-20">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-lg col-span-1">
                                <img src="https://placehold.co/200x200" alt="Result Illustration" className="mx-auto mb-4"/>
                                <h2 className="text-center text-xl font-bold text-purple-600">Your Result!</h2>
                                <p className="text-center text-gray-600">All your insights & details in one place</p>
                                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">YOU'VE PASSED</span>
                                        <span className="text-green-500 font-bold">76% ACCURACY</span>
                                    </div>
                                    <div className="text-center text-2xl font-bold">136 / 240</div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                    <div className="flex items-center mb-2">
                                        <img src="https://placehold.co/40x40" alt="Top Scorer" className="rounded-full mr-2"/>
                                        <div>
                                            <div className="text-gray-600">Top Score</div>
                                            <div className="text-gray-800 font-bold">By Parth Akotkar</div>
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl font-bold">230 / 240</div>
                                    <div className="text-center text-green-500 font-bold">92% ACCURACY</div>
                                </div>
                                <button className="bg-purple-600 text-white w-full py-2 rounded-lg mt-4">Practice more</button>
                                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                                    <h3 className="text-gray-800 font-bold">Revisit Paper</h3>
                                    <p className="text-gray-600">Challenge your friends by simply sharing a link to this test</p>
                                    <button className="bg-blue-600 text-white w-full py-2 rounded-lg mt-2">Visit</button>
                                    <p className="text-gray-500 text-sm mt-2">Instructions for how to upload your handwritten material is given</p>
                                </div>
                            </div>
                            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 gap-2 flex font-bold">  <span className='mt-[6px]'><AiOutlineDownSquare/></span>Compare Accuracy </h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 gap-2 flex font-bold"> <span className='mt-[6px]'><AiOutlineDownSquare/></span>Compare Accuracy </h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 gap-2 flex font-bold"> <span className='mt-[6px]'><AiOutlineDownSquare/></span>Compare Accuracy</h3>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 font-bold">Improvements</h3>
                                    <div className="flex flex-wrap mt-2">
                                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Geography</span>
                                        <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Politics</span>
                                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Current Affairs</span>
                                        <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">General Studies</span>
                                        <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Mathematics</span>
                                        <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Social Studies</span>
                                        <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">English Literature</span>
                                        <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Indian History</span>
                                        <span className="bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">Economics</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 font-bold">Response Time</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-600">Std Time - 2min</span>
                                        <span className="text-red-500 font-bold">+2min</span>
                                    </div>
                                    <div className="text-center text-2xl font-bold text-red-500 mt-2">You are slow!</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 font-bold">Approach Data</h3>
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">25%</span>
                                            <span className="text-gray-800">Based on Facts</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">32%</span>
                                            <span className="text-gray-800">Based on Analysis</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">19%</span>
                                            <span className="text-gray-800">Based on Elimination</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">24%</span>
                                            <span className="text-gray-800">Based on Guess</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h3 className="text-gray-500 font-bold">Suggestions</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">0-1:12</span>
                                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">0-12:32</span>
                                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">0-32:40</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-600">40sec</span>
                                        <span className="text-gray-600">1.5min</span>
                                        <span className="text-gray-600">3min</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-800">Easy</span>
                                        <span className="text-gray-800">Medium</span>
                                        <span className="text-gray-800">Hard</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg col-span-2">
                                    <h3 className="text-gray-500 font-bold">Compare Accuracy</h3>
                                    <div className="mt-2">
                                        <img src="https://placehold.co/400x200" alt="Accuracy Graph" className="w-full"/>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg col-span-2">
                                    <h3 className="text-gray-500 font-bold">Time Taken</h3>
                                    <div className="mt-2">
                                        <img src="https://placehold.co/400x200" alt="Time Taken Graph" className="w-full"/>
                                    </div>
                                    <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </main>
    </div>
  )
}

export default MockTest
