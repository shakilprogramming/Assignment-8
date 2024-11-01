import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: "The Midnight Library", totalPages: 304, rating: 4.5, yearOfPublishing: 2020 },
  { name: "Educated", totalPages: 334, rating: 4.7, yearOfPublishing: 2018 },
  { name: "Atomic Habits", totalPages: 320, rating: 4.8, yearOfPublishing: 2018 },
  { name: "Where the Crawdads Sing", totalPages: 368, rating: 4.6, yearOfPublishing: 2018 },
  { name: "Sapiens: ", totalPages: 498, rating: 4.5, yearOfPublishing: 2011 },
  { name: "The Silent Patient", totalPages: 336, rating: 4.3, yearOfPublishing: 2019 }
];

// Custom Tooltip with book info
function getBookInfo(label) {
  const book = data.find(b => b.name === label);
  return book ? `${book.name} - ${book.yearOfPublishing} (${book.totalPages} pages)` : '';
}

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ background: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label">{label}</p>
        <p className="intro">{getBookInfo(label)}</p>
        <p className="desc">Rating: {payload[0].value}</p>
      </div>
    );
  }

  return null;
}

// Custom bar shape
const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <path
      d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${y + height} Z`}
      fill={fill}
    />
  );
};

// Main Chart Component
const LineChart = () => (
  <BarChart width={1100} height={600} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip content={<CustomTooltip />} />
    <Bar dataKey="rating" fill="#8884d8" shape={<TriangleBar />}>
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.rating >= 4.5 ? "#82ca9d" : "#8884d8"} />
      ))}
    </Bar>
  </BarChart>
);

export default LineChart;
