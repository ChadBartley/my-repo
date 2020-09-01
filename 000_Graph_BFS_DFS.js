/// BFS
// function to performs BFS 
bfs(startingNode) 
{ 

	// create a visited array 
	var visited = []; 
	for (var i = 0; i < this.noOfVertices; i++) 
		visited[i] = false; 

	// Create an object for queue 
	var q = new Queue(); 

	// add the starting node to the queue 
	visited[startingNode] = true; 
	q.enqueue(startingNode); 

	// loop until queue is element 
	while (!q.isEmpty()) { 
		// get the element from the queue 
		var getQueueElement = q.dequeue(); 

		// passing the current vertex to callback funtion 
		console.log(getQueueElement); 

		// get the adjacent list for current vertex 
		var get_List = this.AdjList.get(getQueueElement); 

		// loop through the list and add the element to the 
		// queue if it is not processed yet 
		for (var i in get_List) { 
			var neigh = get_List[i]; 

			if (!visited[neigh]) { 
				visited[neigh] = true; 
				q.enqueue(neigh); 
			} 
		} 
	} 
} 


// Main DFS method 
dfs(startingNode) 
{ 

	var visited = []; 
	for (var i = 0; i < this.noOfVertices; i++) 
		visited[i] = false; 

	this.DFSUtil(startingNode, visited); 
} 

// Recursive function which process and explore 
// all the adjacent vertex of the vertex with which it is called 
DFSUtil(vert, visited) 
{ 
	visited[vert] = true; 
	console.log(vert); 

	var get_neighbours = this.AdjList.get(vert); 

	for (var i in get_neighbours) { 
		var get_elem = get_neighbours[i]; 
		if (!visited[get_elem]) 
			this.DFSUtil(get_elem, visited); 
	} 
} 

