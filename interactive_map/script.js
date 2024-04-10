document.addEventListener('DOMContentLoaded', function() {
    let svg = d3.select('svg');

    let width = +svg.attr('width');
    let height = +svg.attr('height');

    
    let center = [12.549866662031203, 55.67808743497397];
    let projection = d3.geoMercator()
        .scale(100000)
        .center(center)
        .translate([width / 2, height / 2]);

    // add base map
    d3.json('https://api.dataforsyningen.dk/regioner?format=geojson&kode=1084')
        .then(function(data) {
            console.log(data);
            svg.append('g').attr('class', 'areas')
                .selectAll('path')
                .data(data.features)
                .join('path')
                .attr('d', d3.geoPath().projection(projection))
                .style('fill-rule', 'evenodd')
                .attr('fill', 'lightgray')
                .attr('stroke', 'black')
                .attr('stroke-width', 1);

            // add streets
            d3.json('http://localhost:8000/data/edges.json')
                .then(function(data) {
                    console.log(data);

                    // length colorscale
                    // let lengthExtent = d3.extent(data.features, d => d.properties.betweenness);
                    // let colorScale = d3.scaleSequential(d3.interpolateViridis)
                    //     .domain(lengthExtent);
                    // quantile colorscale
                    let colorScale = d3.scaleQuantile()
                        .domain(data.features.map(d => d.properties.betweenness))
                        .range(d3.schemeYlGnBu[5]);

                    svg.append('g').attr('class', 'edges')
                        .selectAll('path')
                        .data(data.features)
                        .join('path')
                        .attr('d', d3.geoPath().projection(projection))
                        .attr('fill', 'none')
                        .attr('stroke', function(d) {
                            return colorScale(d.properties.betweenness);
                        })
                        .attr('stroke-width', 1)
                        .classed('road', true);
                })
                .catch(function(error) {
                    console.log('Error loading data:', error);
                });

        })
        .catch(function(error) {
            console.log('Error loading data:', error);
        });
});
