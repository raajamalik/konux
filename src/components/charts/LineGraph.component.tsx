import React, { Component } from 'react';
import { TrainFrequency } from '../../pages/train-frequency/types/TrainFrequency';
import { Margin } from './types/Margin';
import * as d3 from 'd3';
import Row from 'react-bootstrap/Row';

interface Props {
    data: TrainFrequency[],
    width:number,
    height:number,
    margin:Margin,
    stroke:string,
    strokeWidth:number,
    fill:string,  
}

/**
 * @author Raja Malik
 * 
 * A component to render line graph. Takes following inputs:
 * 
 * - data - data must be an array of json objects having two properties which reprents value for 
 *          x and y co-ordinates. 
 * - width - a valid integer,
 * - height - a valid integer, 
 * - margin - Margin, 
 * - stroke - a string representing color hash or valid color name, 
 * - strokeWidth - a valid integer,
 * - fill - a string representing color hash or valid color name.
 * 
 * To render at axis, the data for x-axis is first sorted. Each intersection of x and y is depicted by 
 * a small circle. 
 * 
 */
export class LineGraphComponent extends Component<Props>{
    
    private tf:TrainFrequency[] = [];
    private d:any;

    render(){   
        const { data } = this.props; 

            //Add parse date
            //must check if any of the x or y is of type date or any other type
            //if(this.tf.length > 0 && this.tf[0].x is Date) {
                this.tf = data.map((f) => { return {x:f.x,date:new Date(f.x),y:f.y}}  );
            //}

            // get min and max of the date
            const dateExtent:any = d3.extent(this.tf,  d => d.date);

            //Canvas for the graph to draw
            let svg = d3.select("svg")
            .attr("viewBox", `150 -20  ${this.props.height} ${this.props.width} `)
            .attr("perserveAspectRatio","xMinYMid");

            //Every time we re-render the graph, we have to remove existing group.
            let g = d3.select('g');
            if(g) g.remove();

            //Create a plot where all your dots will be created at the position where 
            //x and y are intersected.
            let plotGroup = svg.append('g')
                .classed('plot', true)
                
            //Map date to x-position
            const xScale = d3.scaleTime()
                           .domain(dateExtent)
                           .range([this.props.margin.left, this.props.width - this.props.margin.right]);
                          
            //Create xAxis with the use of xScale
            let xAxis = d3.axisBottom(xScale).ticks(5);

            //Append xAsis to plot
            plotGroup.append('g')
                .classed('x', true)
                .classed('axis', true)
                .attr('transform', `translate(${0},${this.props.height-this.props.margin.bottom})`)
                .call(xAxis);
                           
            // get min and max of the date
            const frequencyExtent:any = d3.extent(this.tf, d => d.y);
            
            //Map frequency to y-position
            const yScale = d3.scaleLinear()
                            .domain([Math.min(frequencyExtent[0]), frequencyExtent[1]])
                            .range([this.props.height - this.props.margin.bottom, this.props.margin.top]);
            
            //Create yAxis with the use of yScale
            let yAxis = d3.axisLeft(yScale).ticks(10); 
            
            //Append yAxis to plot
            plotGroup.append('g')
                .classed('y', true)
                .classed('axis', true)
                .attr('transform', `translate(${this.props.margin.left},${0})`)
                .call(yAxis); 

            //plot circles
            plotGroup.selectAll("circle")
            .data( this.tf )
            .enter()
            .append("circle")
                .attr("class","tipcircle")
                .attr("cx", function(d,i){return xScale(d.date || new Date())})
                .attr("cy",function(d,i){return yScale(d.y)})
                .attr("fill","#666666")
                .attr("r",4);

            //create LineGenerator
            var lineGenerator = d3.line<TrainFrequency>()
                        .x(d => xScale(d.date || new Date()))
                        .y(d => yScale(d.y));
            
            this.d = lineGenerator(this.tf);

        return (
            <>
                <div className="graph-canvas">
                    <Row>
                        <svg width={this.props.width} height={this.props.height}>
                            <path 
                                fill={this.props.fill} 
                                stroke={this.props.stroke} 
                                strokeWidth={this.props.strokeWidth}
                                d={this.d}></path>
                        </svg>
                    </Row>
                </div>                
            </>
            
        )
    }
}
