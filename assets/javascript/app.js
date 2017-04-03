var diagram;
 //Best  working code
var flowChartCode =  "node1=>start: Start|past:>http://www.google.com[blank]\n"
                    +"node2=>end: End|future\n"
                    +"node3=>condition: Check college|current\n"
                    +"node4=>inputoutput: Rejected Notification student\n"
                    +"node5=>condition: Submitted By Student?|current\n"
                    +"node6=>operation: Submit Notification\n"
                    +"node7=>operation: Set Approval1\n"
                    +"node8=>condition: Waiting for Approval1?|current\n"
                    +"node9=>operation: Send Approval Notification\n"
                    +"node10=>operation: Send Rejected Notification\n"
                    +""
                    +"node1->node3\n"
                    +"node3(yes,bottom)->node5\n"
                    +"node3(no,right)->node4\n"
                    +"node5(yes, right)->node6(right)->node7(right)->node8\n"
                    +"node5(no)->node2\n"
                    +"node4(right)->node3\n"
                    +"node8(yes,bottom)->node9->node2\n"
                    +"node8(no,left)->node10->node2";

  /* var flowChartCode =  "node1=>start: Start|past:>http://www.google.com[blank]\n"
                        +"node2=>end: End|future\n"
                        +"node3=>condition: Check college|current\n"
                        //+"node3=>operation: Send Rejected Notification\n"
                        +""
                        +"node1->node3\n"
                        //+"node3->node2\n";
                        +"node3(no)->node2\n"
                        +"node3(yes)->node2\n"; */






  if (diagram) { diagram.clean(); }

diagram = flowchart.parse(flowChartCode);
//diagram.drawSVG('chart');
diagram.drawSVG('chart', {
                         'x': 0,
                         'y': 0,
                         'line-width': 2,
                         'line-length': 10,
                         'text-margin': 8,
                         'font-size': 12,
                         'font-color': 'black',
                         'line-color': 'black',
                         'element-color': 'black',
                         'fill': 'white',
                         'yes-text': 'yes',
                         'no-text': 'no',
                         'arrow-end': 'block',
                         'scale': 1,
                         // style symbol types
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
                         // even flowstate support ;-)
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
  console.log(currentEle[0].attributes.class);
});
