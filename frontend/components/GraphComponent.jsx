import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GraphComponent = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Assuming you want to compare intensity values
    const intensityValues = data.map(item => item.intensity);

    // D3 code to create a simple bar chart
    const xScale = d3.scaleBand()
      .domain(data.map((_, index) => index + 1))
      .range([0, 300]) // Adjust the width of the chart as needed
      .padding(0.2); // Adjust the padding between bars

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(intensityValues)])
      .range([200, 0]) // Adjust the height of the chart as needed

    svg.selectAll('rect')
      .data(intensityValues)
      .enter()
      .append('rect')
      .attr('x', (_, index) => xScale(index + 1))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 200 - yScale(d))
      .attr('fill', 'steelblue') // Adjust the color as needed
      .attr('stroke-width', 2); // Adjust the border width

        // .data(intensityValues)
        // .enter()
        // .append('rect')
        // .attr('x', (_, index) => xScale(index + 1))
        // .attr('y', d => yScale(d))
        // .attr('width', xScale.bandwidth(2))
        // .attr('height', d => 200 - yScale(d))
        // .attr('fill', 'steelblue')
        // .attr('stroke', 'white') // Add border color
        // .attr('stroke-width', 2); // Adjust the border width

    // Add axis if required
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', 'translate(0, 200)')
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

  }, [data]);

  return (
    <div>
        <h2>GraphComponent</h2>
        <svg ref={svgRef}></svg>
    </div>
  );
};

export default GraphComponent;

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const GraphComponent = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Bar Chart
//     const intensityValues = data.map(item => item.intensity);

//     const xScale = d3.scaleBand()
//       .domain(data.map((_, index) => index + 1))
//       .range([0, 300])
//       .padding(0.2);

//     const yScale = d3.scaleLinear()
//       .domain([0, d3.max(intensityValues)])
//       .range([200, 0]);

//     svg.append('g')
//       .selectAll('rect')
//       .data(intensityValues)
//       .enter()
//       .append('rect')
//       .attr('x', (_, index) => xScale(index + 1))
//       .attr('y', d => yScale(d))
//       .attr('width', xScale.bandwidth())
//       .attr('height', d => 200 - yScale(d))
//       .attr('fill', 'steelblue')
//       .attr('stroke', 'white')
//       .attr('stroke-width', 2);

//     // Pie Chart
//     const pieData = d3.pie().value(d => d.intensity)(data);

//     const arcGenerator = d3.arc()
//       .innerRadius(0)
//       .outerRadius(100);

//     const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//     svg.append('g')
//       .attr('transform', 'translate(400, 100)')
//       .selectAll('path')
//       .data(pieData)
//       .enter()
//       .append('path')
//       .attr('d', arcGenerator)
//       .attr('fill', (_, index) => colorScale(index));

//   }, [data]);

//   return (
//     <div>
//         <h2>GraphComponent</h2>
//         <svg ref={svgRef}></svg>
//     </div>
//   );
// };

// export default GraphComponent;

