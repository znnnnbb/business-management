import React from 'react'


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page h",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

function Sample() {
  return (
    <>
      <div className="ml-42  ">
        <div className="flex">
          <div className="m-1 p-1  bg-blue-300  w-1/4 shadow-2xl">
            <span className="mt-4">
              <img src="/bubbles.png" alt="" />
            </span>
            <span className="text-white	 text-xl">users</span>
            <br />
            <br />
            <span className="text-3xl text-white">720</span>
            <br />
            <br />
            <a href="">
              <span className="underline decoration-dotted font-extralight underline-offset-2 cursor-pointer hover:text-gray-600 text-white	">
                see all user
              </span>
            </a>
          </div>

          <div className="m-1 p-1 bg-blue-200 w-1/4 shadow-2xl">
            <span className="mt-4 ">
              <img src="/bubbles.png" alt="" />
            </span>
            <span className="text-xl text-white">Orders</span>
            <br />
            <br />
            <span className="text-3xl text-white">720</span>
            <br />
            <br />
            <a href="">
              <span className="underline decoration-dotted font-extralight underline-offset-2 cursor-pointer hover:text-gray-600 text-white	">
                see all Orders
              </span>
            </a>
          </div>

          <div className="p-1 m-1  bg-blue-400 w-1/4 shadow-2xl">
            <span className="mt-4 ">
              <img src="/25268-8-bubbles-photo-thumb.png" alt="" />
            </span>
            <span className=" text-xl text-white	">Earning</span>
            <br />
            <br />
            <span className="text-3xl text-white	">$72</span>
            <br />
            <br />
            <a href="">
              <span className="underline decoration-dotted font-extralight underline-offset-2 cursor-pointer hover:text-gray-600 text-white	">
                view net earning
              </span>
            </a>
          </div>
          <div className=" m-1  bg-blue-700 w-1/4 shadow-2xl">
            <span className="mt-4">
              <img src="/25268-8-bubbles-photo-thumb.png" alt="" />
            </span>
            <span className=" text-xl text-white	">Profit</span>
            <br />
            <br />
            <span className="text-3xl text-white">$72</span>
            <br />
            <br />
            <a href="">
              <span className="underline decoration-dotted font-extralight underline-offset-2 cursor-pointer hover:text-gray-600 text-white	">
                view Net Profit
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex  h-2/3">
        <div className="w-1/3 mt-8 bg-white-300 border shadow-2xl ">
          <h1 className="text-3xl text-gray-500 ml-28">Total revenue</h1>
          <hr className=" mt-2 " />
          <div className="featuredChart"></div>
          <p className="text-center">
            {" "}
            <span className="text-3xl">Total Sale Made Today</span>
            <br />
            <br />
            <span className="text-3xl">$710</span>
          </p>
          <p className="text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            pariatur, ex commodi voluptatum
          </p>
        </div>
        <div className="w-2/3 mt-6 ml-0 ">
          <AreaChart
            width={790}
            height={380}
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
}

export default Sample