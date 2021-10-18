var chart = am4core.create("chart", am4charts.ChordDiagram)

chart.data = [{"from":"Bash/Shell","to":"Bash/Shell","frequency":12611},{"from":"Bash/Shell","to":"C++","frequency":5412},{"from":"Bash/Shell","to":"Go","frequency":6224},{"from":"Bash/Shell","to":"HTML/CSS","frequency":8400},{"from":"Bash/Shell","to":"JavaScript","frequency":9746},{"from":"Bash/Shell","to":"Node.js","frequency":6950},{"from":"Bash/Shell","to":"Python","frequency":11479},{"from":"Bash/Shell","to":"Rust","frequency":6651},{"from":"Bash/Shell","to":"SQL","frequency":8309},{"from":"Bash/Shell","to":"TypeScript","frequency":7570},{"from":"C","to":"C","frequency":6855},{"from":"C","to":"C++","frequency":6804},{"from":"C","to":"HTML/CSS","frequency":5793},{"from":"C","to":"JavaScript","frequency":7081},{"from":"C","to":"Python","frequency":9226},{"from":"C","to":"SQL","frequency":5417},{"from":"C#","to":"C#","frequency":14241},{"from":"C#","to":"HTML/CSS","frequency":9386},{"from":"C#","to":"JavaScript","frequency":10910},{"from":"C#","to":"Node.js","frequency":6900},{"from":"C#","to":"Python","frequency":8347},{"from":"C#","to":"SQL","frequency":9371},{"from":"C#","to":"TypeScript","frequency":9037},{"from":"C++","to":"C","frequency":5198},{"from":"C++","to":"C++","frequency":9876},{"from":"C++","to":"HTML/CSS","frequency":6615},{"from":"C++","to":"JavaScript","frequency":8158},{"from":"C++","to":"Node.js","frequency":5695},{"from":"C++","to":"Python","frequency":10619},{"from":"C++","to":"Rust","frequency":5277},{"from":"C++","to":"SQL","frequency":6012},{"from":"C++","to":"TypeScript","frequency":5435},{"from":"HTML/CSS","to":"Bash/Shell","frequency":8834},{"from":"HTML/CSS","to":"C","frequency":5326},{"from":"HTML/CSS","to":"C#","frequency":11518},{"from":"HTML/CSS","to":"C++","frequency":8341},{"from":"HTML/CSS","to":"Go","frequency":9434},{"from":"HTML/CSS","to":"HTML/CSS","frequency":27842},{"from":"HTML/CSS","to":"Java","frequency":10009},{"from":"HTML/CSS","to":"JavaScript","frequency":27658},{"from":"HTML/CSS","to":"Kotlin","frequency":6193},{"from":"HTML/CSS","to":"Node.js","frequency":18731},{"from":"HTML/CSS","to":"PHP","frequency":7188},{"from":"HTML/CSS","to":"Python","frequency":19884},{"from":"HTML/CSS","to":"Rust","frequency":8405},{"from":"HTML/CSS","to":"SQL","frequency":18424},{"from":"HTML/CSS","to":"TypeScript","frequency":20152},{"from":"Java","to":"Bash/Shell","frequency":5590},{"from":"Java","to":"C#","frequency":5658},{"from":"Java","to":"C++","frequency":6093},{"from":"Java","to":"Go","frequency":6419},{"from":"Java","to":"HTML/CSS","frequency":10222},{"from":"Java","to":"Java","frequency":13749},{"from":"Java","to":"JavaScript","frequency":13311},{"from":"Java","to":"Kotlin","frequency":7130},{"from":"Java","to":"Node.js","frequency":9246},{"from":"Java","to":"Python","frequency":12995},{"from":"Java","to":"Rust","frequency":5552},{"from":"Java","to":"SQL","frequency":10432},{"from":"Java","to":"TypeScript","frequency":9553},{"from":"JavaScript","to":"Bash/Shell","frequency":9563},{"from":"JavaScript","to":"C","frequency":5647},{"from":"JavaScript","to":"C#","frequency":12630},{"from":"JavaScript","to":"C++","frequency":8908},{"from":"JavaScript","to":"Dart","frequency":5218},{"from":"JavaScript","to":"Go","frequency":11412},{"from":"JavaScript","to":"HTML/CSS","frequency":25391},{"from":"JavaScript","to":"Java","frequency":11347},{"from":"JavaScript","to":"JavaScript","frequency":32964},{"from":"JavaScript","to":"Kotlin","frequency":7138},{"from":"JavaScript","to":"Node.js","frequency":21367},{"from":"JavaScript","to":"PHP","frequency":7473},{"from":"JavaScript","to":"Python","frequency":22006},{"from":"JavaScript","to":"Rust","frequency":10367},{"from":"JavaScript","to":"SQL","frequency":19855},{"from":"JavaScript","to":"TypeScript","frequency":23712},{"from":"Node.js","to":"Bash/Shell","frequency":5800},{"from":"Node.js","to":"C#","frequency":6256},{"from":"Node.js","to":"Go","frequency":7388},{"from":"Node.js","to":"HTML/CSS","frequency":13897},{"from":"Node.js","to":"Java","frequency":5885},{"from":"Node.js","to":"JavaScript","frequency":17477},{"from":"Node.js","to":"Node.js","frequency":17686},{"from":"Node.js","to":"Python","frequency":11546},{"from":"Node.js","to":"Rust","frequency":6538},{"from":"Node.js","to":"SQL","frequency":10140},{"from":"Node.js","to":"TypeScript","frequency":15377},{"from":"PHP","to":"HTML/CSS","frequency":9271},{"from":"PHP","to":"JavaScript","frequency":10857},{"from":"PHP","to":"Node.js","frequency":7572},{"from":"PHP","to":"PHP","frequency":7296},{"from":"PHP","to":"Python","frequency":7613},{"from":"PHP","to":"SQL","frequency":8295},{"from":"PHP","to":"TypeScript","frequency":6964},{"from":"Python","to":"Bash/Shell","frequency":9174},{"from":"Python","to":"C","frequency":6746},{"from":"Python","to":"C#","frequency":7443},{"from":"Python","to":"C++","frequency":10351},{"from":"Python","to":"Go","frequency":9500},{"from":"Python","to":"HTML/CSS","frequency":13320},{"from":"Python","to":"Java","frequency":8725},{"from":"Python","to":"JavaScript","frequency":16745},{"from":"Python","to":"Kotlin","frequency":5300},{"from":"Python","to":"Node.js","frequency":11156},{"from":"Python","to":"Python","frequency":26992},{"from":"Python","to":"Rust","frequency":9667},{"from":"Python","to":"SQL","frequency":13141},{"from":"Python","to":"TypeScript","frequency":11405},{"from":"Rust","to":"Rust","frequency":5044},{"from":"SQL","to":"Bash/Shell","frequency":7873},{"from":"SQL","to":"C#","frequency":10622},{"from":"SQL","to":"C++","frequency":6336},{"from":"SQL","to":"Go","frequency":8553},{"from":"SQL","to":"HTML/CSS","frequency":16816},{"from":"SQL","to":"Java","frequency":9249},{"from":"SQL","to":"JavaScript","frequency":19962},{"from":"SQL","to":"Kotlin","frequency":5495},{"from":"SQL","to":"Node.js","frequency":13133},{"from":"SQL","to":"PHP","frequency":5995},{"from":"SQL","to":"Python","frequency":17274},{"from":"SQL","to":"Rust","frequency":6940},{"from":"SQL","to":"SQL","frequency":24011},{"from":"SQL","to":"TypeScript","frequency":14389},{"from":"TypeScript","to":"C#","frequency":6697},{"from":"TypeScript","to":"Go","frequency":6039},{"from":"TypeScript","to":"HTML/CSS","frequency":12120},{"from":"TypeScript","to":"JavaScript","frequency":14403},{"from":"TypeScript","to":"Node.js","frequency":11526},{"from":"TypeScript","to":"Python","frequency":8689},{"from":"TypeScript","to":"Rust","frequency":6117},{"from":"TypeScript","to":"SQL","frequency":8834},{"from":"TypeScript","to":"TypeScript","frequency":18117}]

chart.dataFields.fromName = "from"
chart.dataFields.toName = "to"
chart.dataFields.value = "frequency"


var links = chart.links.template
links.tooltipText = "[bold]{value}[\] who worked with [bold]{fromName}[\]\n want to work with [bold]{toName}[\]"
chart.tooltip.label.textAlign = "middle"

var hoverState = links.states.create("hover")
hoverState.properties.fillOpacity = 0.7
hoverState.properties.strokeOpacity = 0.7

let nodeTemplate = chart.nodes.template
nodeTemplate.showSystemTooltip = false
nodeTemplate.propertyFields.fill = "color"
nodeTemplate.tooltipText = "{name}"

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function (event) {
  let node = event.target
  node.outgoingDataItems.each(function (dataItem) {
    if (dataItem.toNode) {
      dataItem.link.isHover = true
      dataItem.toNode.label.isHover = true
    }
  })
  node.incomingDataItems.each(function (dataItem) {
    if (dataItem.fromNode) {
      dataItem.link.isHover = true
      dataItem.fromNode.label.isHover = true
    }
  })

  node.label.isHover = true
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function (event) {
  let node = event.target
  node.outgoingDataItems.each(function (dataItem) {
    if (dataItem.toNode) {
      dataItem.link.isHover = false
      dataItem.toNode.label.isHover = false
    }
  })
  node.incomingDataItems.each(function (dataItem) {
    if (dataItem.fromNode) {
      dataItem.link.isHover = false
      dataItem.fromNode.label.isHover = false
    }
  })

  node.label.isHover = false
})

chart.nodes.template.draggable = false