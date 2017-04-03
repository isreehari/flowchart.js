var diagram;
/*  //Best  working code
var flowChartCode =  "node1=>start: Start|past:>http://www.google.com[blank]\n"
                    +"node2=>end: End|future\n"
                    +"node3=>condition: Check college|current\n"
                    //+"node4=>operation: Rejected Notification student\n"
                    +"node5=>condition: Submitted By Student?|current\n"
                    +"node6=>operation: Submit Notification\n"
                    +"node7=>operation: Set Approval1\n"
                    +"node8=>condition: Waiting for Approval1?|current\n"
                    +"node9=>operation: Send Approval Notification\n"
                    +"node10=>operation: Send Rejected Notification\n"
                    +""
                    +"node1->node3\n"
                    +"node3(no,left)->node2\n"
                    +"node3(yes,bottom)->node5\n"
                    +"node5(yes, right)->node6(right)->node7(right)->node8\n"
                    +"node5(no)->node2\n"
                    //+"node4->node2\n"
                    +"node8(yes,top)->node9->node2\n"
                    +"node8(no,left)->node10->node2";*/
  var flowChartCode = null;
  var flowChartNode = { 'nodes':[ 'node1=>start: Start|past[blank]','node2=>end: End|future'],
                        'condition':['node1->node2']};

                  $.each(flowChartNode.nodes,function(key,val){
                      if(flowChartCode)
                          flowChartCode = flowChartCode + val +"\n";
                          else
                          flowChartCode = val +"\n";
                  });

                  $.each(flowChartNode.condition,function(key,val){
                      if(flowChartCode)
                          flowChartCode = flowChartCode + val +"\n";
                          else
                          flowChartCode = val +"\n";
                  });

                  console.log(flowChartCode);


/*  var flowChartCode =  "node1=>start: Start|past[blank]\nnode2=>end: End|future\n"
                        //+"node3=>condition: Check college|current\n"
                        //+"node3=>operation: Send Rejected Notification\n"
                        +""
                        +"node1->node2\n";*/
                        /*+"node1->node3\n"
                        +"node3->node2\n";
                        +"node3(no)->node2\n"
                        +"node3(yes)->node2\n"; */






  if (diagram) { diagram.clean(); }

diagram = flowchart.parse(flowChartCode);
//diagram.drawSVG('chart');
diagram.drawSVG('chart', {
                            // 'x': 30,
                            // 'y': 50,
                            'line-width': 3,
                            'maxWidth': 3,//ensures the flowcharts fits within a certian width
                            'line-length': 100,
                            'text-margin': 10,
                            'font-size': 14,
                            'font': 'normal',
                            'font-family': 'Helvetica',
                            'font-weight': 'normal',
                            'font-color': 'black',
                            'line-color': 'black',
                            'element-color': 'black',
                            'fill': 'white',
                            'yes-text': 'yes',
                            'no-text': 'no',
                            'arrow-end': 'block',
                            'scale': 1,
                            'symbols': {
                              'start': {
                                'font-color': 'red',
                                'element-color': 'green',
                                'fill': 'yellow'
                              },
                              'end':{
                                'class': 'end-element'
                              }
                            },
                            'flowstate' : {
                              'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                              'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                              'future' : { 'fill' : '#FFFF99'},
                              'request' : { 'fill' : 'blue'},
                              'invalid': {'fill' : '#444444'},
                              'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                              'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                            }
                       });


$(".addNode").click(function(){

  var currentEle = $(this);
  var relation = currentEle[0].getAttribute("class");
  var nodes = relation.split(" ")[1].split("_");
  var nodeClass = {fromNodeId:nodes[1],toNodeId:nodes[2]};

  $("#myModal").modal();

  console.log(nodeClass);
  //console.log(currentEle[0].attributes.class);

});
