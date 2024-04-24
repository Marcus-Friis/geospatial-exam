# Hyggebike 🚲

<img src="pictures/hyggebike.png" width=400 style="display: block; margin-left: auto; margin-right: auto;"></img>

Exam project for Geospatial Data Science 

By Mads Høgenhaug, Marcus Friis &  Morten Pedersen


## Project description 

Introducing "Hyggebike": A framework to get the hyggeligste route from point A to point B. Based on various factors such as nearby nature, noise, and amount of traffic, we want to construct a "hygge score" for each road. Then we will find a route that focuses on minimizing the distance while maximizing the "hygge score". For this, we will use OpenStreetMap along with any auxiliary data that we suspect could contribute to a more "hyggelig" route. Optimally, we want to end up with an interactive tool, similar to other map services, but with the custom pathfinder. For map visualizations, we wish to create a map detailing the bicycle network of Copenhagen with visualized "hygge scores", along with individual maps of factors contributing to the score. Extra ideas could be to implement POIs along the route, such as restaurants, toilets, etc. etc. Or generate "hygge routes" based on a list of POIs - the possibilities are endless.

![Look at this beautiful map](pictures/coolmap.png)


## Data
### Air pollution
Airpolution.geojson.txt: Air pollution in Copenhagen municipality measured from 5 November 2018 to 1 March 2020 using a Google Street View car with attached scientific aerial measurement equipment. From https://www.opendata.dk/city-of-copenhagen/airview

### Birds
bird_observations.rar: Bird observations, downloaded from https://dofbasen.dk/search/index.php with area set to "DOF København" and years set to 2020 to 2024, afterwards cleaned as to only have observations with exact locations marked.

### Cafes
cafes.geojson: Cafes in Copenhagen area, from OSM with Tag:amenity=cafe.

### Trees
Trees.rar: Municipal trees in Copenhagen municipality. From https://www.opendata.dk/city-of-copenhagen/trae-basis-kommunale-traeer#resource-traer_basis.csv

### Noise
Lorem ipsum

### Drinking water
drinkingwater.geojson: Drinking water in Copenhagen area, from OSM with Tag:amenity=drinking_water.
