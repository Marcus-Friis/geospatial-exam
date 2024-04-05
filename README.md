# Hyggebike 🚲

<img src="pictures/hyggebike.png" width=400 style="display: block; margin-left: auto; margin-right: auto;"></img>

Exam project for Geospatial Data Science 

By Mads Høgenhaug, Marcus Friis &  Morten Pedersen


## Project description 

Introducing "Hyggebike": A framework to get the hyggeligste route from point A to point B. Based on various factors such as nearby nature, noise, and amount of traffic, we want to construct a "hygge score" for each road. Then we will find a route that focuses on minimizing the distance while maximizing the "hygge score". For this, we will use OpenStreetMap along with any auxiliary data that we suspect could contribute to a more "hyggelig" route. Optimally, we want to end up with an interactive tool, similar to other map services, but with the custom pathfinder. For map visualizations, we wish to create a map detailing the bicycle network of Copenhagen with visualized "hygge scores", along with individual maps of factors contributing to the score. Extra ideas could be to implement POIs along the route, such as restaurants, toilets, etc. etc. Or generate "hygge routes" based on a list of POIs - the possibilities are endless.

## How to run beautiful map
Run a local host (because of CORS errors). It can be done with python as such:
```
python3 -m http.server
```
Navigate to your localhost ([`http://localhost:8000/`](http://localhost:8000/) with the above command), and it should render a beautiful website with a map.
![Look at this beautiful map](pictures/coolmap.png)
