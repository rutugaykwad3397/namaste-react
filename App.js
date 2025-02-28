// const heading=React.createElement(
//     "h1",
//     {id:"heading",xyz:"ABC"},
//     "Hello World from React");

//     console.log(heading); 
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am h1 tag</h1>
 *          <h1>I am h1 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h1>I am h1 tag</h1>
 *      </div>
 * </div>
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
    React.createElement("div",
        {id:"child1"},
       [ React.createElement("h1",{},"I am h1 tag"),
         React.createElement("h2",{},"I am h2 tag")
       ]
    ),
    React.createElement("div",
        {id:"child2"},
       [ React.createElement("h1",{},"I am h1 tag of child2"),
        React.createElement("h2",{},"i am h1 tag of child2")
        ]
    )
    ]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
